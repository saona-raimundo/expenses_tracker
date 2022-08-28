console.log('[Service Worker] Running');

// Create a list of all the files to be cached

const cacheName = 'PWA-v0-0-1';
const appShellFiles = [
  '/',
  '/app.js',
  '/favicon.ico',
  '/image.jpg',
  '/index.html',
  '/style.css',
];
const contentToCache = appShellFiles;

// Install the service worker

self.addEventListener('install', (e) => {
	console.log('[Service Worker] Installing');
	e.waitUntil((async () => {
		const cache = await caches.open(cacheName);
		console.log('[Service Worker] Caching content');
		await cache.addAll(contentToCache);
	})());
});

// Activate cache clean up

self.addEventListener('activate', (e) => {
	console.log('[Service Worker] Activating');
	// Delete any files that are no longer necessary and clean up after the app in general
	e.waitUntil(caches.keys().then((keyList) => {
		return Promise.all(keyList.map((key) => {
			if (key === cacheName) { return; }
			return caches.delete(key);
		}))
	}));
});


// Fetch any HTTP request

self.addEventListener('fetch', (e) => {
	console.log('[Service Worker] Fetching');
	// This intercepts any HTTP request returning whatever we want! 
	e.respondWith((async () => {
		// Fetch content from the cache
		// If content is there, offline functionality can be provided
		const r = await caches.match(e.request);
		console.log(`[Service Worker] Fetching resource: ${e.request.url}`);
		// If content was cached, return it (no version control)
		if (r) { return r; } 
		// If content was not cach...
		// fetch it from the network
		const response = await fetch(e.request); 
		// cache it
		const cache = await caches.open(cacheName);
		console.log(`[Service Worker] Caching new resource: ${e.request.url}`);
		cache.put(e.request, response.clone());
		// return it
		return response;
	})());
});