/* BK Fit — Garmin share-card reader.
   POST an image (JSON {image: base64, mediaType}) with header X-Pair-Code.
   Returns the activity fields Haiku read off the card. Holds no data. */
import Anthropic from '@anthropic-ai/sdk';

const ALLOWED_ORIGINS = ['https://goondoc08.github.io', 'http://localhost:8080', 'http://127.0.0.1:8080'];
const MAX_B64 = 3_000_000; // ~2.2 MB image; the app downsizes well below this

const nullable = (t) => ({ type: [t, 'null'] });
const SCHEMA = {
  type: 'object',
  additionalProperties: false,
  required: ['is_activity', 'activity_type', 'title', 'month', 'day', 'start_time',
             'duration_seconds', 'distance_miles', 'avg_hr', 'calories'],
  properties: {
    is_activity: { type: 'boolean' },
    activity_type: { type: 'string', enum: ['walking', 'hiking', 'running', 'cycling', 'swimming',
      'strength', 'yoga', 'hiit', 'cardio', 'stairs', 'other'] },
    title: nullable('string'),
    month: nullable('integer'),
    day: nullable('integer'),
    start_time: nullable('string'),
    duration_seconds: nullable('integer'),
    distance_miles: nullable('number'),
    avg_hr: nullable('integer'),
    calories: nullable('integer'),
  },
};

const PROMPT = `This image should be a fitness activity summary, usually a Garmin Connect share card or a Health Connect / Garmin activity screen.
Read it and fill the fields:
- is_activity: false if this is not a single workout/activity summary.
- activity_type: from the activity icon and wording (a title like "Pearland Walking" means walking; "Bike"/"Ride" means cycling). If the title was renamed, trust the icon.
- title: the activity title exactly as shown.
- month, day: the activity date (the card has no year; never guess one).
- start_time: 24-hour "HH:MM".
- duration_seconds: total/elapsed time ("34:29" = 2069; "1:02:10" = 3730; "38m 56s" = 2336).
- distance_miles: convert km to miles if shown in km. null if not shown.
- avg_hr, calories: null if not shown.
Never invent a value that isn't visible.`;

function cors(origin) {
  const ok = ALLOWED_ORIGINS.includes(origin);
  return {
    'Access-Control-Allow-Origin': ok ? origin : ALLOWED_ORIGINS[0],
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, X-Pair-Code',
    'Vary': 'Origin',
  };
}
const json = (body, status, origin) =>
  new Response(JSON.stringify(body), { status, headers: { 'Content-Type': 'application/json', ...cors(origin) } });

export default {
  async fetch(req, env) {
    const origin = req.headers.get('Origin') || '';
    if (req.method === 'OPTIONS') return new Response(null, { status: 204, headers: cors(origin) });
    if (req.method !== 'POST') return json({ error: 'not_found' }, 404, origin);
    if (!env.PAIR_CODE || req.headers.get('X-Pair-Code') !== env.PAIR_CODE)
      return json({ error: 'bad_code' }, 401, origin);

    let body;
    try { body = await req.json(); } catch { return json({ error: 'bad_request' }, 400, origin); }
    const { image, mediaType } = body || {};
    if (typeof image !== 'string' || !image || image.length > MAX_B64 ||
        !['image/jpeg', 'image/png', 'image/webp'].includes(mediaType))
      return json({ error: 'bad_image' }, 400, origin);

    const client = new Anthropic({ apiKey: env.ANTHROPIC_API_KEY });
    try {
      const res = await client.messages.create({
        model: 'claude-haiku-5-5',
        max_tokens: 2000,
        output_config: { effort: 'low', format: { type: 'json_schema', schema: SCHEMA } },
        messages: [{ role: 'user', content: [
          { type: 'image', source: { type: 'base64', media_type: mediaType, data: image } },
          { type: 'text', text: PROMPT },
        ] }],
      });
      if (res.stop_reason === 'refusal') return json({ error: 'refused' }, 422, origin);
      const text = res.content.find((b) => b.type === 'text');
      if (!text) return json({ error: 'no_output' }, 502, origin);
      return json({ activity: JSON.parse(text.text) }, 200, origin);
    } catch (e) {
      if (e instanceof Anthropic.RateLimitError) return json({ error: 'busy' }, 429, origin);
      if (e instanceof Anthropic.APIError) return json({ error: 'upstream', status: e.status }, 502, origin);
      return json({ error: 'failed' }, 500, origin);
    }
  },
};
