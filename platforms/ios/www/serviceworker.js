function getStaticFileList(){return staticFileList?Promise.resolve(staticFileList):fetch("staticfiles").then(function(e){return e.json().then(function(e){return staticFileList=e,e})})}function isCacheable(e){if("GET"!==(e.method||"").toUpperCase())return!1;var t=e.url||"";return 0!=t.indexOf(baseUrl)?!1:0==t.indexOf(staticFileBaseUrl)?!1:!0}var staticFileCacheName="staticfiles",staticFileList,baseUrl=self.location.toString().substring(0,self.location.toString().lastIndexOf("/")),staticFileBaseUrl=baseUrl+"/staticfiles";self.addEventListener("install",function(e){e.waitUntil(caches.open(staticFileCacheName).then(function(e){return getStaticFileList().then(function(t){return e.addAll(t)})}))}),-1==self.location.toString().indexOf("localhost")&&self.addEventListener("fetch",function(e){isCacheable(e.request)&&e.respondWith(caches.open(staticFileCacheName).then(function(t){return t.match(e.request).then(function(n){return n||fetch(e.request).then(function(n){return t.put(e.request,n.clone()),n})})}))}),self.addEventListener("activate",function(e){e.waitUntil(caches.open(staticFileCacheName).then(function(e){return getStaticFileList().then(function(t){var n=new Set(t);return e.keys().then(function(t){var i=baseUrl+"/";return Promise.all(t.map(function(t){return n.has(t.url.replace(i,""))?void 0:e.delete(t)}))})})}).then(function(){return self.clients.claim()}))}),importScripts("bower_components/emby-webcomponents/serviceworker/notifications.js","bower_components/emby-webcomponents/serviceworker/sync.js");