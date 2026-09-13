# BK Fit 2.0 — Build Plan

_Drafted Sep 12 2026. Supersedes the static 6-day cycle in `workout_tracker.html`._

## Why we're rebuilding

Chloe stopped using BK Fitness. Two separate causes, both real:

1. **Nothing in it applies to her right now.** Light duty, walking only. The app opens to "Lift A · 3×12 goblet squat." There is no reason to launch it, so she doesn't.
2. **ADHD + 18 permanently identical sessions.** The entire workout content is a hardcoded `DAYS` array: 6 days × 3 BB tiers, fixed forever, with exactly 2 curated swap alternatives per exercise. For her, novelty isn't polish — it *is* the adherence mechanism.

The postpartum return-to-truck window is the highest-stakes training block she will ever run, and **there is no formal return-to-duty test.** OB clearance is the only gate. Whatever fitness she has on day one back on the truck is whatever she built. Her stated worry is precisely that.

So the app has two jobs:

- **Get opened daily** — by always having an honest, low-bar, genuinely-varied thing to do.
- **Produce evidence she's ready** — measured benchmarks, not a vibe.

## Known facts

| | |
|---|---|
| Due date | **Dec 11 2026** |
| Delivery | Planned vaginal (C-section branch still needed as fallback) |
| Pregnancy # | Second. No issues last pregnancy |
| Other kids | **28-month-old at home** |
| Breastfeeding | Planned |
| Pelvic floor PT | Considered, not done last time, undecided now |
| Return-to-duty test | **None.** OB clearance only |
| Current activity | Light duty — walking, nothing else |
| Home equipment | **Adjustable dumbbells, 5 → 52.5 lb per hand.** No stairs at home, no bench/box yet |
| Gym access | City gym (home area) + work/station gym — both full complement |
| Pool | City gym: 25m lap pool **+ shallow activity pool that can be walked** |
| Wearable | Garmin watch, worn daily |
| Return to work | **~14 weeks post-birth → ~Mar 19 2027** (refine once birth date is real) |

## Chloe's review — Sep 12 2026

She worked through all 17 blocks. Approved outright: strength formats, cardio formats, movement library, P2 sessions, core features, benchmarks. Everything below is what she changed.

### The architectural change: a budget, not a schedule

Two of her notes point at the same thing, and it's a better design than what I proposed.

> _"I want to make sure there's freedom to add workouts that count toward the plan (not just the streak but actually adjusts the plan around the impromptu workouts) … if I'm feeling hypermotivated to do one specific thing, I want to make sure that energy is captured and accounted for in my plan, even if it wasn't what I was 'supposed to do' that day."_

> _"Maybe the app can see how many I'm actually doing in P0–P2 and adjust the expected number based on actual data."_

**So the plan stops being a fixed weekly script and becomes a weekly budget the app fills adaptively.** Each phase sets targets by category — strength, cardio, mobility, pelvic floor — and anything she logs draws that budget down, whether the app proposed it or not. A spontaneous 45-minute yoga session satisfies the week's mobility and part of its conditioning, and the generator stops asking for those; it fills what's left instead of stacking on top of what she already did.

Consequences:
- **"Log anything" is a first-class feature in every phase**, not just a walk button. Type, duration, effort, and optionally which patterns it hit. This also covers her P0 and P1 requests for a free/yoga activity — same feature, available everywhere.
- **An impromptu lift credits against the anchors** when the movements match, and shifts the next session so she isn't given a heavy hinge the day after she did one on her own.
- **Weekly targets self-calibrate** from what she actually does in P0–P2. If the honest number turns out to be 2 sessions a week, P3 is built around 2 rather than nagging her about 4.

This fits the ADHD problem better than novelty alone does: it stops punishing her for following her own motivation.

### Starting loads — she was right, and I've cut them

> _"The starting weights look way too high to me, and I'm nervous about getting demotivated or injured because I'm going to heavy. Do we think these weights are reasonable for someone who hasn't really lifted in 10 months?"_

She's correct, and the hinge numbers were the worst of it. Context: 5'7", ~12 months detrained by the time P3 starts, second postpartum, breastfeeding (elevated relaxin), no PT eval. The numbers I published were also a **week-4** example with no visible ramp, which made them read as entry weights.

Revised P2 (down across the board):

| Exercise | Was | Now |
|---|---|---|
| Goblet squat | 15–20 | **10–15** |
| DB row | 20–25/hand | **15–20/hand** |
| DB Romanian deadlift | 20–25/hand | **10–15/hand** |
| Suitcase carry | 20 lb × 30 s | **15 lb × 20 s** |
| Split squat | BW or one DB | **bodyweight only** |

Revised P3 — the full six-week ramp, published so there's no hidden jump:

| Exercise | Wk 1 | Wk 2 | Wk 3 | Wk 4 | Wk 5 | Wk 6 |
|---|---|---|---|---|---|---|
| Goblet squat | 15 | 20 | 25 | 30 | **35** | 30 |
| DB RDL /hand | 15 | 17.5 | 20 | 25 | **30** | 25 |
| DB row /hand | 20 | 22.5 | 25 | 27.5 | **30** | 27.5 |
| DB floor press /hand | 15 | 17.5 | 20 | 22.5 | **25** | 22.5 |
| Farmer's carry /hand | 20 | 25 | 30 | 35 | **40** | 35 |

Week 5 peaks at roughly 60–75% of what I originally proposed for week 4. Two governing rules matter more than the table:

- **Carries progress by distance first, then load.** Week 1 is 20 lb/hand × 20 yd; build to 40 yd before the weight moves.
- **Load only goes up when the last set left ~3 reps in the tank and nothing leaked, domed, or hurt.** The table is a default, not a target to chase.

### Her direct questions, answered

**Back squats instead of front squats?** Yes, but in P4, not as a P3 anchor — for two reasons. Anchors have to work at home, and a back squat needs a barbell and rack she only has at the gym. And a loaded bar on the back is the highest intra-abdominal-pressure squat variant and the hardest one to bail out of — a poor first choice four months postpartum with no PT eval. Goblet squat anchors P3; back squats get added at the gym once she's back at work with a base built.

**Is the farmer's carry injury-prone?** Orthopedically it's one of the *safest* loaded movements — the spine stays neutral and vertical, there's no loaded lowering phase, and the failure mode is setting the weights down. Three real risks, all manageable: grip giving out suddenly (drop them, don't fight it), side-bending or leaning under load (stop the set when posture breaks, not when grip does), and — the one that actually matters for her — **it's a high intra-abdominal-pressure task**, so it's a genuine pelvic floor load. That's exactly why it now starts at 20 lb/hand and progresses distance first.

**Chair instead of a box?** She has a sturdy chair, which covers more than I assumed: step-ups, rear-foot-elevated split squats, incline push-ups, tricep dips, chair-supported rows, single-leg sit-to-stands. **So the box drops from "strongest recommendation in this document" to nice-to-have** — worth buying eventually for a stable, adjustable height and for box squats and Copenhagen planks, but she is not blocked without one. She said "maybe," and with a chair that's the right answer.

**Reminder notifications?** The one request that needs infrastructure we don't have. Real push notifications from a static GitHub Pages PWA need a push service and a server to send them; notifications scheduled in-page die when the app closes. Honest recommendation: defer it, use a repeating phone alarm in the meantime, and revisit if we ever add a backend for Garmin sync.

**Kid-friendly cardio tags?** Yes — and "ruck where the baby is the weight" is a good idea that goes straight in. Baby-carrier walks become a tagged loaded-carry modality alongside stroller walks, and home circuits get flagged for whether they survive a toddler in the room.

### Streak — keep it, but make it unbreakable

> _"I think a streak would be cool and would like to keep the feature, but it's not something I've been successful with historically. An additional dopamine mechanism is probably a good idea."_

Her own diagnosis is the fix. A single fragile number is the failure mode, so:
- **The streak counts weeks that hit the budget, not consecutive days.** One missed day can't break it; a fully empty week can.
- **Several independent progress signals** so no single lapse zeroes everything: weekly budget bars with visible partial credit, an anchor-load log ("+15 lb on your squat since week 1"), benchmark deltas, first-time-tried badges for new movements, and cumulative distance/volume totals.

### Other answers

- **Sessions per week:** 4 as the starting assumption, self-calibrating from P0–P2 actuals.
- **Session length:** 20 min default; 45–60 min becomes available once she's back at work.
- **Won't do:** road bikes. Outdoor cycling is out (cruiser, doesn't work as cardio) — seated gym bike only. Removing outdoor cycling from the modality list.
- **Benchmarks:** in, all tiers. Her reasoning: _"It's okay to fail tests, you have to know where you are. If I'm not making progress in the benchmarks, then the plan needs to be adjusted."_ That last clause becomes a feature — flat benchmarks should trigger a plan review, not just a sad number.

### What would most improve her odds

She asked whether anything needs adding to actually get her there in time. Ranked:

1. **Start P0 now.** Biggest lever by far, and available today. She has ~13 weeks before birth; light dumbbell work twice a week through the third trimester means she enters recovery materially less detrained. The "Something more" card matters more than I framed it — it's not a bonus, it's the head start.
2. **Do the P1 pelvic floor work.** It's the rate limiter on everything in P3. Loading in February is capped by what her floor tolerates, and that's decided in December and January.
3. **One pelvic floor PT visit in P1 or P2.** Two pregnancies, no eval either time. Said once already and not going to keep pushing — but she asked what would improve the odds, and this is the honest top-three answer.
4. **Prioritize carries and stairs over max lifting.** Job-specific, trainable fast, lower risk than chasing squat numbers.
5. **Protein and whatever sleep is protectable.** Breastfeeding plus a newborn plus a toddler is the real ceiling on eight weeks of training, and no amount of programming works around it.

## Locked decisions

| Decision | Choice |
|---|---|
| Novelty model | **Format variety + movement variety** — both engines, both axes |
| Progression model | **Anchor + rotate** — 1–2 fixed anchor lifts per block, everything else generated |
| What she sees today | **Honest minimum mode** — walk + pelvic floor, walk logs as a real session |
| Architecture | **Fresh single-file build.** Keep BK palette, cursive greeting, name, URL. Migrate `wt_history` |
| Return-to-duty target | **No test exists** → target real job tasks + self-benchmarks |
| Generation | **Deterministic client-side, offline, no per-session AI** (free, instant, works with no signal) |

## 1. Phase system — the spine

One anchor date (birth date) drives everything, with manual override. Transitions are **date-suggested, user-confirmed, and always reversible** — postpartum timelines slip, and an app that force-marches her into a phase she isn't ready for is an app she deletes.

| Phase | Window | Approx dates | Content |
|---|---|---|---|
| **P0 · Light duty** | now → birth | Sep 12 → Dec 11 | Daily walk, pelvic floor set, optional 5–10 min mobility. **No lift days shown at all.** Walk = logged session, streak credit |
| **P1 · Recovery** | birth → +6wk | Dec 11 → ~Jan 22 | Deliberately not a workout. Breathing, pelvic floor reconnection, short walks when cleared. Framed as *"this is the work right now"* so it doesn't read as nothing |
| **P2 · Reconnect** | clearance → ~2wk | ~Jan 22 → ~Feb 5 | Bridge phase. Core/pelvic floor progressions, bodyweight patterns, walking volume. Gates progression on **symptoms, not dates** |
| **P3 · Return prep** | **6wk**, the key block | ~Feb 5 → ~Mar 19 | Anchor + rotate. Job-task targeted. Benchmarks wk 1 / 3 / 6. Cardio shifts to interval + carry bias |
| **P4 · On duty** | ongoing | ~Mar 19 2027 → | Shift-aware again (48/96). Full novelty engine, maintenance load |

**The 14-week return date is good news.** Birth Dec 11 + 14 weeks = ~Mar 19. Minus a 6-week recovery window, that leaves a **full 8 weeks between clearance and the truck** — 2 weeks of P2 on-ramp plus a genuine 6-week P3 block, not the cramped 4 weeks I'd budgeted. Six weeks is enough for real, measurable progression on the anchors.

Dates assume vaginal delivery on the due date and immediate 6-week clearance. Both will move, and the plan gets re-anchored after birth. The calendar is a default, not a commitment.

**P2 is an addition to the original outline.** Six-to-eight weeks of clearance does not make someone ready for a 4-week strength build — jumping straight from zero to P3 is how people get hurt or quit in week one. P2 is the on-ramp. It matters more here because this is a second pregnancy on the same pelvic floor with no PT eval either time.

## 2. Real-world constraints — second baby + toddler

This is the section that most shapes the build. A newborn *plus* a 28-month-old is a different problem than a first baby.

- **Uninterrupted blocks don't exist.** Two nap schedules that won't reliably align. Time-box options are **10 / 15 / 20 / 30 min** — 45 is not realistic and offering it just makes the app feel out of touch.
- **Home is the default venue.** A gym trip requires childcare for two kids. Every phase must be fully completable with home equipment; gym sessions are a bonus path.
- **"Kids around" toggle** — filters the movement pool for sessions done with a toddler in the room. Drops loaded overhead work, supine-under-weight, jumping/plyos, and anything that fails badly if a toddler climbs on her mid-rep.
- **Stroller work counts.** Double-stroller walks are her most available cardio by a wide margin and must log as real sessions.
- **She's already carrying ~30 lbs of toddler daily, asymmetrically.** Two implications: she has more baseline carry capacity than a typical postpartum starting point, and she has accumulated one-sided loading worth programming against (anti-rotation, single-side carries balanced both ways, upper-back work) rather than ignoring.
- **Interruption is the norm, not the exception.** Sessions must persist, pause, and resume across app kills — and a partial session must log as partial, never as a miss.

## 3. Venue system — a first-class dimension

Equipment is not one inventory, it's three. **Venue is a required input to every generated session**, and it gates both the movement pool and the cardio modality list.

| Venue | Strength | Cardio | Availability |
|---|---|---|---|
| **Home** | Adjustable DBs 5–52.5/hand | Stroller / outdoor walking, DB conditioning circuits. **No stairs, no hills** | Always — the default, must be fully sufficient alone |
| **City gym** (home area) | Full complement | Stairmill, treadmill, bike, rower, elliptical, **25m lap pool + walkable shallow pool** | On leave, when childcare for two works out |
| **Station / work gym** | Full complement | Rower, **real stairs**, sled, full cardio | Only after return to work, on shift |

Design consequences:

- **52.5 lb per hand is plenty — I was wrong to call this a constraint.** 105 lb total across two dumbbells will not be outgrown in a 6-week postpartum return block. Goblet squats, RDLs, rows, presses, split squats, and farmer's carries all have real headroom. Load progression works normally at home; no need to lean on tempo tricks to manufacture difficulty.
- **No stairs at home is the actual constraint, and it's a real problem for the plan as written.** Stairs were meant to be the spine of her cardio build — highest fireground relevance, lowest pelvic-floor risk — and they're gym-only. Houston-area terrain means no hills either. Two responses:
  1. **Prioritize stairs on every gym visit.** When venue = city gym or station, the cardio generator weights heavily toward stairmill/stairs. Gym trips become stair trips.
  2. **Weighted step-ups are the home substitute** and they're a genuinely good one — same unilateral concentric-drive pattern, scalable with the DBs she already has. This needs a sturdy box or bench, which she doesn't have. **A plyo box or adjustable step is the single highest-value purchase for her home setup (~$40–70)** and it also unlocks step-ups, split squats, rows, dips, Copenhagen planks, and box squats — a large chunk of the movement catalog is gated behind having one elevated surface.
- **The shallow walkable pool is an underrated asset.** Aquatic walking is near-zero impact, pelvic-floor friendly, and one of the best documented bridges back toward running. Good P2 option and a good deload tool in P3.
- **Venue selection should be one tap, remembered, and reversible mid-session** — she may plan a gym session, lose childcare, and need the home version of the same session instead.
- **Post-return, the station gym unlocks the full toolkit** — rower, sled, vest, bar, real stairs. That's when the Tier 2 benchmark set becomes available (§8).

## 4. Breastfeeding considerations

- **Relaxin stays elevated while nursing**, so joint laxity persists well past the usual postpartum window. Argues for conservative loading and avoiding deep end-range positions through P2 and into P3.
- Another reason **stairs and carries beat max-effort lifting** as the spine of the build — high job-relevance, low joint-laxity risk.
- Energy and hydration are genuinely limiting. Reinforces the BB rebase in §9 and the short time-boxes in §2.

## 5. Strength engine — format × movement

A session is a **template** (the format) filled with **slots** (movement roles) drawn from **pools** (filtered by phase, equipment, exclusions, kids-around).

**Formats** — the bigger novelty lever. Same movements feel like a different workout:

| Format | Notes | Legal from |
|---|---|---|
| Straight sets | 3×N, classic | P2 |
| Superset pairs | A1/A2 | P2 |
| Circuit | 3–5 rounds, short rest | P3 |
| EMOM | every minute on the minute | P3 |
| E90 / E2MOM | every 90s or 2 min | P3 |
| Ladder | reps ascend/descend | P3 |
| AMRAP block | time-capped | P3 |
| Density | quality rounds in X min | P4 |
| Complex / flow | one implement, chained movements | P4 |

Each format declares: legal phases, slot count, time cost, and whether it can carry an anchor lift. P2 is restricted to straight sets and supersets — no intensity formats while reconnecting.

**Slots per session:** warm-up (2–3) → **anchor (1–2, fixed for the block)** → accessory (2–3, rotating) → core/pelvic floor (1–2, phase-gated) → job-specific (0–1) → cool-down (1–2).

**Anchor + rotate in practice:** across a 5-week P3 block the anchors stay put (e.g. goblet squat, DB RDL, farmer's carry) and get progressed weekly with logged load. Everything around them is fresh every single session. Consistency where it's needed to prove progress; novelty where it's free.

## 6. Cardio engine — format × modality

Same two-axis approach. This matters as much as strength for FF and is where postpartum gating is strictest.

**Modalities** (impact-gated by phase):

| Modality | Impact | From | Where |
|---|---|---|---|
| Walk / stroller walk | none | P0 / P1 | **Home** |
| DB conditioning circuit | low | P2 | **Home** |
| Weighted step-ups | low | P2 | **Home** — needs a box/step |
| Pool walking (shallow) | none | P2 — **not before bleeding stops** | City gym |
| Lap swim (25m) | none | P2 — same gate | City gym |
| Stationary bike | none | P0 | City gym |
| Incline treadmill walk | none | P0 | City gym |
| Elliptical | none | P0 | City gym |
| Stairmill | low | P2 (weighted P3) | City gym |
| Real stairs | low | P2 (weighted P3) | Station |
| Rower | none, high core demand | P2 | Station + city gym |
| Sled / drag | low | P3 | Station |
| Outdoor run | **high** | P3, and only behind the Running Unlock | Home |

**Formats:** steady state · tempo · short intervals (30/30, 60/60) · long intervals (3–4 min) · pyramid/ladder · fartlek · hill or incline repeats · **stair repeats** · ruck / weighted carry walk · **descending rest** · mixed-modal (bike→stairs→row) · recovery flush.

**FF bias:** in P3/P4 the generator weights toward short intervals, stair repeats, descending rest, ruck, and mixed-modal — the formats that build repeat-high-output-with-bad-recovery capacity. Descending rest in particular is the closest non-gear simulation of working down an SCBA bottle.

**Stairs remain the highest-value modality but are gym-only** (see §3). Highest fireground relevance, low impact, pelvic-floor friendly — so every gym visit should bias toward them, and weighted step-ups cover the pattern at home once she has a box. Running becomes a late bonus rather than the base, which inverts the usual assumption and is the right call postpartum.

## 7. Running Unlock — a gate, not a date

Running stays locked until she self-passes a screen. Not a calendar check:

- Pain-free walking, 30 min
- Single-leg balance, 10 sec each
- Single-leg calf raise, ×20 each
- Single-leg bridge, ×20 each
- Hop test, ×10 each
- **No leaking, heaviness, dragging, or pain** during or after any of the above

Fails are fine and re-testable. Presented as an achievement to unlock, which is both safer and better ADHD framing than "wait 12 weeks." With no PT eval in the loop, this screen and the P2 symptom gating are the only safety net in the system.

## 8. Readiness benchmarks — the answer to her worry

Chloe's call was that benchmarking starts **after** return to work, since the equipment lives at the station — and she's unsure about a home tier. No stairs at home does knock out my two best pre-return tests. But I still think a small home tier earns its place, because the whole reason this feature exists is to answer *"am I ready?"* **before** she hits the truck; benchmarks that start post-return can't validate the block they're meant to validate.

So: two tiers, with Tier 1 cut down to only what genuinely works at home and made **opt-in**.

**Tier 1 — home-feasible, optional, runs during P3.** Four tests, all with dumbbells, a stopwatch, and a sidewalk. Tested P3 weeks 1 / 3 / 6, shown as a delta card, never a pass/fail, and soft-framed — logged as ordinary sessions that happen to repeat.

| Benchmark | Needs | Maps to |
|---|---|---|
| Farmer's carry — distance @ DB load | DBs | Hose, equipment, tools · **she confirmed this is doable** |
| Work-capacity circuit — fixed DB circuit for time | DBs | Back-to-back fireground efforts |
| Walk / ruck test — 1-mile time, or distance in 20 min | Sidewalk | Aerobic base, on-feet endurance |
| 1-min HR recovery after hard effort | Garmin | SCBA-relevant recovery |
| _Weighted step-ups in 3 min_ | _Box + DBs_ | _Stair capacity — only if she gets a box_ |

Four numbers, no new equipment, no childcare. If the box gets bought, the step-up test becomes the best stair proxy available at home.

**If she'd rather skip Tier 1 entirely, the plan still works** — she just goes back without a measured before/after, which is exactly the uncertainty she said she's worried about. Her call, and it's a toggle in settings either way.

**Tier 2 — unlocks at return to work (P4), station/city gym.**

| Benchmark | Needs | Maps to |
|---|---|---|
| Weighted-vest stair climb | Vest | Stairs in full gear |
| Sled or hose drag — distance / time | Sled | Hose advance, victim drag |
| Dead hang — time | Bar | Ladders, tool work, grip |
| Rower — 500m or 2000m time | Rower | Sustained work capacity |

Tier 2 becomes her ongoing maintenance yardstick; Tier 1 is the pre-return evidence. Together this is the feature that addresses *"the level of fitness she's at when she hits the truck is on her."* She gets numbers instead of anxiety — and gets them in time for them to matter.

## 9. Body Battery rebase — a real bug in the current design

Postpartum with a newborn **and** a toddler, BB will sit at 20–30 for months. The current engine's absolute thresholds (`BB < 30 = scaled`, `< 40 = rest`) will recommend **rest every single day for four months.**

Fix: store a rolling 14-day BB window and tier against **her own recent distribution**, not fixed cutoffs. A BB of 30 might be her 70th percentile → she gets a normal session. Keep one absolute floor (BB < 15 → rest regardless).

**Input model — two layers, per Chloe's ask (BB influence *plus* her own readiness feeling on top):**

1. **Layer 1 — Body Battery**, rebased against her rolling 14-day baseline as above. The objective floor.
2. **Layer 2 — readiness tap** (rough / ok / good), which shifts the tier up or down one step from whatever BB suggested.

So BB proposes and she disposes. A 35 BB day rebased to "normal" that she taps *rough* drops to scaled; the same day tapped *good* bumps up. This respects the data without letting it override her, which matters a lot in a phase where BB will be chronically depressed and she may genuinely feel fine.

**Garmin sync — recommend deferring.** She wears the watch daily, so auto-sync is attractive, but it means a backend (Supabase + a scheduled fetch, the plumbing To Be Frank already has) and BK has always been zero-backend localStorage. Step 1 needs to ship in the next few weeks, and blocking it on backend work is the wrong trade. Recommendation: **launch with her reading BB off the watch into the app** — she already does exactly this with today's slider, so it's no new friction — and add real Garmin sync later as an enhancement, reusing TBF's script. Flagging as a decision rather than assuming.

## 10. Other newborn-reality requirements

- **"How long do I have?"** input — 10 / 15 / 20 / 30 min. Generator picks a format and slot count that fits.
- **Session persistence.** `activeWorkoutState` is currently in-memory only (line ~1789). A phone lock or app kill loses the whole session. With two kids, interruption is guaranteed — this must persist to localStorage.
- **Abandonable without failure.** Partial sessions log as partial, not as a miss. No streak break.
- **Reroll button.** Bumps a stored seed offset. Movement novelty only feels like agency if she can decline today's pick; without it, a random assignment is still an assignment.
- **Deterministic seeding** (`date + phase + sessionIndex`) so a refresh does *not* reshuffle her session mid-workout.
- **Anti-repeat.** Track the last N sessions' movement IDs and penalize recent picks. TBF is pure random, which produces real back-to-back repeats.

## 11. Movement catalog schema

Extends To Be Frank's, with the postpartum fields it lacks — these are what make the generator safe rather than just varied:

```js
{ id, name, video, cat, pattern,
  type: 'reps' | 'time' | 'dist',
  equip: [], sets, reps | dur, rest,
  phaseMin: 'P0'|'P1'|'P2'|'P3'|'P4',   // earliest legal phase
  supine: bool,                          // pregnancy gate
  impact: 'none'|'low'|'high',           // pelvic floor gate
  intraAbPressure: 'low'|'mod'|'high',   // diastasis gate
  pelvicFloorLoad: 'low'|'mod'|'high',
  kidSafe: bool,                         // survives a toddler in the room
  dutyRelevance: ['stair','drag','carry','grip','breach','crawl'],
  formats: [],                           // which templates it works in
  injExclude: [], cues, tips }
```

## 12. Asset plan

**Reusable from To Be Frank as-is:** ~24 of 30 lifts, all 7 mobility, all 8 warm-up clips. 46 mp4 files already exist.

**Convert BK's GIFs to mp4.** The repo currently ships ~90MB of GIFs (Fire_Hydrant 23MB, pelvic-tilt 17MB, bent-over-row 9MB) against TBF's ~100–300KB mp4s. Expect ~90MB → ~3MB, which matters on mobile data.

**Gaps to collect** — concentrated on fireground demands TBF has none of:

- **Carries** — farmer's, suitcase, front-rack, overhead
- **Drag / pull** — sled, band-resisted march, towel or rope drag
- **Stairs** — loaded / weighted stair climb
- **Grip** — dead hang, towel hang, plate pinch
- **Postpartum core progressions** — heel slide, toe tap, side plank knee→full, bear hold, pallof press
- **Pelvic floor / breathing** — 360 breathing, core connection breath
- **Glute / hip** — hip thrust, monster walk, lateral band walk
- **Anti-rotation / upper back** — for the asymmetric toddler-carrying load
- **Power, late phase** — KB swing, KB clean, landmine press, sandbag hug carry

**Target catalog size:** ~55 after merging TBF + BK and de-duping; ~70–75 with the gap list. With 9 strength formats × 12 cardio formats × anchor+rotate, that produces effectively non-repeating sessions for many months.

## 13. Migration

- `wt_history` → new schema; keep the original as `wt_history_v1` untouched as a backup
- Map old `dayId` records into phase-tagged session records so the streak and stats survive
- Keep `wt_bb`
- Extend the existing Export/Import backup (commit `7418297`)

## 14. Build order

1. **Phase engine + honest minimum mode (P0)** — ships first, gets her opening the app again
2. Movement catalog schema + merged/converted asset library
3. Venue system (home / city gym / station) + equipment filtering
4. Strength generator (formats, slots, pools, anti-repeat, seeding)
5. Cardio generator (modalities, formats, impact + venue gating)
6. Session persistence + time-box input + reroll + kids-around toggle
7. BB rebase + two-layer readiness input
8. P1/P2 content and gating
9. P3 block: anchors, progression, Tier 1 benchmarks, readiness card
10. Running Unlock
11. P4 shift-aware maintenance + Tier 2 benchmarks
12. _Later, optional:_ Garmin auto-sync

Step 1 is deliberately first and small, and there are ~3 months before the due date to land it. There is no point building the generator if she's still not launching the app.

## Open items

- **Buy a plyo box / adjustable step?** ~$40–70, and it's the single highest-leverage addition to her home setup — it's the only home stair substitute she has, and it also unlocks step-ups, split squats, box squats, rows, dips, and Copenhagen planks. Strongest recommendation in this document.
- **Tier 1 benchmarks — in or out?** Cut to four home-doable tests in §8 and made opt-in. She was unsure; this is hers to decide.
- **Garmin auto-sync: build it or defer it?** Recommendation in §9 is defer — launch with manual BB entry off the watch, add sync later.
- **Re-anchor the calendar after birth.** Every date in §1 derives from the Dec 11 due date and a 14-week return; both need one update once the real birth date exists.
- C-section fallback branch — resolved in-app after birth, changes P1 length and core restrictions.
