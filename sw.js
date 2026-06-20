const C='visitka-v1';
self.addEventListener('install',e=>self.skipWaiting());
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));
self.addEventListener('fetch',e=>{e.respondWith((async()=>{try{const r=await fetch(e.request);const c=await caches.open(C);try{c.put(e.request,r.clone());}catch(_){}return r;}catch(err){const m=await caches.match(e.request);return m||new Response('',{status:504});}})());});
