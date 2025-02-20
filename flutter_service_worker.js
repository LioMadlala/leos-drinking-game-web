'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "e6f911a83230d0e694a4920a23e9bf13",
"assets/AssetManifest.bin.json": "927be51c61be49b656c8864cfe29a770",
"assets/AssetManifest.json": "d986918641f1fe52878a8d9838520115",
"assets/assets/images/Cover.png": "fb2386e038224a7d23ef4a71414c624d",
"assets/assets/images/party2.jpg": "d9981b6443b13707f775cd997fab4354",
"assets/assets/images/party_image.jpg": "141f7be0d53707457212e2daa1a2c964",
"assets/assets/ios-emojis/image%2520107.png": "cccca297a9b215349d1faa8ca80f62d6",
"assets/assets/ios-emojis/image%2520117.png": "d36e2f9e3ee333f755d30b80dd5f25f7",
"assets/assets/ios-emojis/image%252012.png": "47a827aa4f12e0fd7f403dbf6392963f",
"assets/assets/ios-emojis/image%2520123.png": "8f3e8a0eb8e1a9fc14d6ca231328396a",
"assets/assets/ios-emojis/image%2520143.png": "56e5351722fb97bdee8f2dc9e342bcd4",
"assets/assets/ios-emojis/image%2520158.png": "bddaf7d0e99b15bf123b42481aa27491",
"assets/assets/ios-emojis/image%2520165.png": "ef4c8f423bc07776ae1e10fb59191cd0",
"assets/assets/ios-emojis/image%25201772.png": "206c2500ab4abb69665bcc7df0242305",
"assets/assets/ios-emojis/image%25202383.png": "ab2265ad5b3c150eb1390db0b4581a56",
"assets/assets/ios-emojis/image%25202385.png": "53a1e4251e435b2d222139195124b531",
"assets/assets/ios-emojis/image%25202401.png": "3a775ddc32c4a9fb98fc239762f2d879",
"assets/assets/ios-emojis/image%25202411.png": "89d799a84fbad145304e0c675a936421",
"assets/assets/ios-emojis/image%25202414.png": "685d4c88dbdf7c5568e821de81026e62",
"assets/assets/ios-emojis/image%25202458.png": "2bd2e7116ffc95f031e93de247bfb7bf",
"assets/assets/ios-emojis/image%25202537.png": "42766b6ba88cc7ddaa662ff90c31f280",
"assets/assets/ios-emojis/image%25207.png": "00d6e2fcc7ce1164edad4aa6bd2addb9",
"assets/assets/ios-emojis/image%25208.png": "36b571a5e36f3b3949ae47dc2e2a44cd",
"assets/assets/ios-emojis/image%252083.png": "db8ccbec9ce8d9b0945e5fc12e687e0b",
"assets/assets/ios-emojis/image%252089.png": "11f59cae0941dbb4d8fcaf8396d0fc90",
"assets/assets/ios-images/47%25206.png": "094254368d2f9f4f25c670c5c940b981",
"assets/assets/ios-images/58.png": "93b3ce9569eb321e596d011f77d95375",
"assets/assets/ios-images/Character=Angela,%2520Skin%2520tone=White,%2520Posture=20%2520Like.png": "6e334d7eeec3713a1bab00c4342c3449",
"assets/assets/ios-images/Character=Ariana,%2520Skin%2520tone=White,%2520Posture=1%2520Happy.png": "c27b47e2a6e0a700e56b415112cd9418",
"assets/assets/ios-images/Character=Ariana,%2520Skin%2520tone=White,%2520Posture=9%2520Lovely.png": "b60cbab7fe2acddf71d8f2041206d10c",
"assets/assets/ios-images/Character=Darlene,%2520Skin%2520tone=White,%2520Posture=20%2520Like.png": "905fdaebd870bf74ba0d695b7d67ca22",
"assets/assets/ios-images/Character=Ezra,%2520Skin%2520tone=White,%2520Posture=11%2520Party.png": "898b8a827842e45971f912d764e7bc5d",
"assets/assets/ios-images/Character=Ishanvi,%2520Skin%2520tone=Black,%2520Posture=16%2520Winking.png": "efddcf53383ce5d27600d5f671993d1d",
"assets/assets/ios-images/Character=Ishanvi,%2520Skin%2520tone=White,%2520Posture=16%2520Winking.png": "2a87080aaf38bb5affe1454bdd2b1704",
"assets/assets/ios-images/Character=Kim,%2520Skin%2520tone=Black,%2520Posture=20%2520Like.png": "8040e026f5d47fc93b8b524fd6c18ae7",
"assets/assets/ios-images/Character=Kim,%2520Skin%2520tone=White,%2520Posture=11%2520Party.png": "40d1a203f6b353af23d4cd2731d0571c",
"assets/assets/ios-images/Character=Mary,%2520Skin%2520tone=Black,%2520Posture=1%2520Happy.png": "3ad122f3e730eb0384f57cde9e28fff0",
"assets/assets/ios-images/Character=Mary,%2520Skin%2520tone=White,%2520Posture=1%2520Happy.png": "f495c67611b6625b5b9cc2a731942526",
"assets/assets/ios-images/Character=Priyanka,%2520Skin%2520tone=White,%2520Posture=16%2520Winking.png": "5711fecd3d0fea3d9554eb565d29ce00",
"assets/assets/ios-images/Person=Chris,%2520Skin%2520Tone=Black,%2520Posture=16%2520Winking.png": "54d75f87e9a8eb4976e6aa040e44f441",
"assets/assets/ios-images/Person=Ed,%2520Skin%2520Tone=Black,%2520Posture=16%2520Winking.png": "ca440dba4f9299f9f0dddac416ac314d",
"assets/assets/ios-images/Person=Ed,%2520Skin%2520Tone=White,%2520Posture=17%2520Happy%2520Winking.png": "93b3ce9569eb321e596d011f77d95375",
"assets/assets/ios-images/Person=Ed,%2520Skin%2520Tone=White,%2520Posture=24%2520Fisting.png": "413024b177c7f443d612dc4b8e4ca7c7",
"assets/assets/ios-images/Person=George,%2520Skin%2520Tone=White,%2520Posture=16%2520Winking.png": "679fbdcefa990e7de68c5a3d61a8eded",
"assets/assets/ios-images/Person=John,%2520Skin%2520Tone=Black,%2520Posture=17%2520Happy%2520Winking.png": "cb7005ac872903ab3e6d4c81a0a071b0",
"assets/assets/ios-images/Person=John,%2520Skin%2520Tone=White,%2520Posture=16%2520Winking.png": "490c285846428280dcce6faebdb27f6e",
"assets/assets/ios-images/Person=Justin,%2520Skin%2520Tone=Black,%2520Posture=15%2520Grinning.png": "07b969ddba1fe81fd3f1ae97cd694f80",
"assets/assets/ios-images/Person=Justin,%2520Skin%2520Tone=White,%2520Posture=15%2520Grinning.png": "d1caa3f799b71b41e9a74d71d86f832a",
"assets/assets/ios-images/Person=Karim,%2520Skin%2520Tone=Black,%2520Posture=1%2520Happy.png": "8e9a28670c76322b7f263feca93e8386",
"assets/assets/ios-images/Person=Karim,%2520Skin%2520Tone=White,%2520Posture=17%2520Happy%2520Winking.png": "70425bf7f138a60a61408b8c370d3458",
"assets/assets/ios-images/Person=Mattew,%2520Skin%2520Tone=Black,%2520Posture=1%2520Happy.png": "4d73caf9f2711f7d83fb9197230398f4",
"assets/assets/ios-images/Person=Mattew,%2520Skin%2520Tone=White,%2520Posture=17%2520Happy%2520Winking.png": "5589512378c0bcc148c2456ec2625aa6",
"assets/assets/logo/game_logo.png": "b8538e60372f08e265bf7bd95c372764",
"assets/FontManifest.json": "52a5e6218a1fae506c72b3db43cad4cd",
"assets/fonts/Itim-Regular.ttf": "4a3f2cf1ced5257b6af803f4b86bf427",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/fonts/MochiyPopOne-Regular.ttf": "fd14364910d4e503548200395d835d30",
"assets/fonts/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/NOTICES": "32b2f798b138ee682cee796892139f44",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "261f2ee81f9b71f7166ef36a1729272a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "dcd766f81363797053334dadf1d75de5",
"/": "dcd766f81363797053334dadf1d75de5",
"main.dart.js": "c989c20e6945dda824eed12ed63e1b5d",
"manifest.json": "a7c9c446b2dde036c729fbda95c826f7",
"version.json": "ca00fc0d60b3a5e2c6e17f6142bcb19f"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
