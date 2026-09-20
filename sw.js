/* BK Fit service worker — bump CACHE on every deploy */
var CACHE = 'bkfit-v2.2.1';
var SHELL = ['./', './workout_tracker.html', './manifest.json', './icon-192.png', './icon-512.png'];

self.addEventListener('install', function(e){
  self.skipWaiting();
  e.waitUntil(caches.open(CACHE).then(function(c){
    return Promise.all(SHELL.map(function(u){
      return c.add(u).catch(function(){});
    }));
  }));
});

self.addEventListener('activate', function(e){
  e.waitUntil(caches.keys().then(function(keys){
    return Promise.all(keys.map(function(k){ return k === CACHE ? null : caches.delete(k); }));
  }).then(function(){ return self.clients.claim(); }));
});

self.addEventListener('fetch', function(e){
  var req = e.request;
  if(req.method !== 'GET') return;
  var url = new URL(req.url);
  if(url.origin !== location.origin) return;

  // Videos: cache-first, they never change
  if(url.pathname.indexOf('/videos/') >= 0){
    e.respondWith(caches.match(req).then(function(hit){
      return hit || fetch(req).then(function(res){
        if(res && res.ok){ var cl = res.clone(); caches.open(CACHE).then(function(c){ c.put(req, cl); }); }
        return res;
      });
    }));
    return;
  }

  // Everything else: network-first with cache-busting, fall back to cache offline
  e.respondWith(
    fetch(req, {cache: 'no-store'}).then(function(res){
      if(res && res.ok){ var cl = res.clone(); caches.open(CACHE).then(function(c){ c.put(req, cl); }); }
      return res;
    }).catch(function(){ return caches.match(req); })
  );
});
