'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/config": "c7aa81b72cb13c301886bce3abe97831",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "cbb78b0676f32807a115080f83cd3e1b",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "2c35f3025fe697c55c58a97c71ae574a",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/refs/remotes/azzouzRemot/main": "ae9c02faf8dbed73471f1e631ec603b8",
".git/logs/refs/remotes/azzouzRemot/master": "88afffc4e3ea82613ab17d270c00a01b",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/0b/996c4e3638f84295310025b5ce5f240e7fce2a": "6566b33dc7bb12ae29c64ed6113ec21a",
".git/objects/0b/a02120416988026a7be303acc69c92d0390752": "a6f943b118d8f60eabbf240829e9b12f",
".git/objects/0e/36bb08c6d318e882a3fe92a7065ca74ba39292": "fa35de45b72eec8d6b3e5bdc07fef245",
".git/objects/0e/e3590f4d74c3a4e4621a8d048d01f13436ec7a": "25939fd9f3cb53628d90cf3f4f9a026a",
".git/objects/13/312c208c874b4a9a12da794358ea6ddb01efbc": "73f5b2fed26dade9f21dcb452a211c0f",
".git/objects/13/bc0732adb5209919aa169f11cc11c144857ba5": "b76d9fa1799db181dc29449da0f9dfde",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
".git/objects/16/c18f26f6fc408112ebf99d7788ca442f81188e": "92300d9dc8dd111a4c36eb74495501f2",
".git/objects/18/3c59c71e86e64f466fcfb36ec683f48fd1ccce": "4e86457d7a4457c76367cf8c012e4129",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/29/a4a851ceeb79908f008407969cb59a40e22f0e": "61ae33f197165c9c53369e8a8ee7c746",
".git/objects/2b/e39c7fd3da441ddac9bea54fd12621dd39960a": "24031b20667d22ca8dba4debe8b9eab5",
".git/objects/30/af74fef94d9aeccae4f0141c39cf4be36b02d8": "f6776d6f82a6562d6afc561b78c8b273",
".git/objects/35/ceb9f81037534afbf50878309fa2aa38b76b33": "4d5efea0bd627652b78032a2bc99c795",
".git/objects/39/a17c87d70e95bbf953b813b4195c40babe2ecb": "ea57041db59107030d7dae7000f0904b",
".git/objects/3b/6ed11f30a1b110c3196b960bcfcb084fb9f34e": "95bcdc396c263db334341f38066280e6",
".git/objects/41/1f041ac2d5a7db7bf8e34b35b582561cc7bce9": "ac2c8eec884adc0e4c3805f1e744a1cc",
".git/objects/41/d0dbb68e72b5c97056d597d07fe4e3fdccdb70": "ea2d806672f019f24beb2b275d0de714",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/4a/1ef34683363a806b8944234c6545f796af5b89": "90bce988f373fa0f35ad5e25e44f42f4",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/53/a6c3555b9520e08da89bc0f4c2dade90cbf184": "ecb426a80d0b7172b9d00ba0be003014",
".git/objects/60/d7688cc78417a4f4253be4a8d590d858842eb6": "63848e920d430829aad374a2e011c023",
".git/objects/68/7a9ab6bb41fdbcc22fac53839f49ed6c4df941": "0070759d805d3052d681bd01d6f52bf4",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
".git/objects/71/ea972be61e30054ec686bed548a673372b7864": "b8c90e4ff1a05a60ee3b75283d56cbea",
".git/objects/7b/d0aa7eed562c2243e82b5e5022812453b0718c": "efb25666510a1e5b2c84a7ce94667fba",
".git/objects/86/bbf16358613401fb8986e924a574b400537370": "1a8aa009a15e709014c1d13e9f3e5fa8",
".git/objects/89/28c6920b849a1f42019dfcaf92644a941818ec": "1f1c953286f7cf1c7c417a2b32f5d37d",
".git/objects/89/60a8fd43b90e20b602065206bd249b1a756219": "62b15f6d1ce3b144793e0b7682ee9f66",
".git/objects/89/8f26baa907fbaaa5e06c8a9d67f49540491854": "c36a846d8e0e3ae6f2abbda0e4cfc471",
".git/objects/8d/8d329c62cd7829d8717128e196ef101940a906": "635c47f7dc37df7bf8061eecfe142a80",
".git/objects/94/b52e13bf7919ae4ea7235d78019b592dde8611": "b79fa5ca1cdbf72f253763797850f314",
".git/objects/96/16488569303dc41efe58011a7df3350f29b906": "6070b7519471f9425ddb880100327ef5",
".git/objects/9f/89ed544106218b2f53162a221adce0dea9e909": "1ccd43149b3e27612fc62da734420d57",
".git/objects/a4/a7ad88893a654f159b605c3cb097da6e2a04fc": "aba92af1200b758b2596b485ce15add8",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
".git/objects/b6/c1b13d42c0fad76d8ebe8d67f3c33c94ba1c60": "05df29659caf953907bcd73343765c4a",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/bb/fb5800103017fc347b0e2642e618498aab833f": "beaa4b4ecd69c94f54d5dead3d50bd86",
".git/objects/bf/4a458e7d60de867d9db1671eea388412dee0ca": "b9641f126f71f0745bfc8bdbda1b6134",
".git/objects/c5/73aabe224ee5aef14f7b1e68539d5ea4390c78": "2520f2874483f1385047c5275aa4fa0e",
".git/objects/d3/e441367e02d5bcbac12cb447e4ba39c1133de8": "bc5f8a5a93b48937d2bf95df14451bd1",
".git/objects/d5/cf29abdb09c24a656f6aa575c3b02f489d8c9f": "7aab2e2e0f346e0df1a62139a4d4fcce",
".git/objects/fd/8397b4e9fb9d989bcdf40e4a0292f5bd159301": "a6b36c9bacf3c811e5aba74f4fbc5a6c",
".git/objects/pack/pack-6a2432120f8a451d7a5c9053b1e1526c706f3832.idx": "c2ade1b4d4947a6f1b99d2b912eccf96",
".git/objects/pack/pack-6a2432120f8a451d7a5c9053b1e1526c706f3832.pack": "8fb53e1f4ca321511301087e730cca16",
".git/objects/pack/pack-6a2432120f8a451d7a5c9053b1e1526c706f3832.rev": "d5a1bde0255ad3b6297e3d503ca00bf3",
".git/objects/pack/tmp_pack_bEUpL9": "986392bcb92be3e53f27fb9c09dd1f3e",
".git/objects/pack/tmp_pack_MQ4V83": "92d4b881a6f7528cb0d821167b379699",
".git/refs/remotes/azzouzRemot/main": "49a9c6483111f0f32b5580166bc2b4e2",
".git/refs/remotes/azzouzRemot/master": "ccce76b7f7b678de1fc5bb999b6739e0",
"assets/AssetManifest.bin": "d7d19d7764439b34268c15446dcbff85",
"assets/AssetManifest.bin.json": "9fa57c5e5f3364ea655dfd913f448cf1",
"assets/AssetManifest.json": "8b42958c12d46bdcb491cc4fd5923c76",
"assets/assets/fonts/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/assets/fonts/Poppins-Medium.ttf": "bf59c687bc6d3a70204d3944082c5cc0",
"assets/assets/fonts/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/assets/fonts/Poppins-SemiBold.ttf": "6f1520d107205975713ba09df778f93f",
"assets/assets/icons/about.json": "d40faf29ddcf3548fe5b2c0bc55dc67b",
"assets/assets/icons/call.json": "687387c37f598c7af2bdd0a55eb47888",
"assets/assets/icons/coding.json": "48257b8edfd0b107ad24e4d36d74ce3b",
"assets/assets/icons/dev.png": "136350fd9f00dc8d1dd1514e40b9f9cd",
"assets/assets/icons/developer.png": "6576f0932f8dc70413579a59715c184b",
"assets/assets/icons/done.png": "d3786409b1df621a0b55e61d92430590",
"assets/assets/icons/edu.json": "50e6e15345857f807e53df09b2d23f24",
"assets/assets/icons/exp.json": "a78d3c24364a1710a9bfc954dc0b4aed",
"assets/assets/icons/facebook.png": "cb055867df3c7b03ef1135f77d1a9411",
"assets/assets/icons/github.png": "e6b2daf427b81c388625ffee75f2acf4",
"assets/assets/icons/hashnode.png": "5830176711a7028847bb9ef5fba9b39b",
"assets/assets/icons/instagram.png": "78064309e7314e8399f3f83d715aecc7",
"assets/assets/icons/linkedin.png": "1816e5c1168ca75e4e824ed21c4f002a",
"assets/assets/icons/portfolio.json": "87119d0086b0ddf9dc54bbbef3ba6594",
"assets/assets/icons/student.png": "e9e5874f03b649f3101e7458f3b7acdf",
"assets/assets/icons/telegram.png": "c89ff009e3e05233e29b53baea4b57de",
"assets/assets/icons/twitter.png": "632f6320a7e3538439ffafd9ee8a03cd",
"assets/assets/icons/vol.json": "69c4da86fe7689cd63a143041db90be2",
"assets/assets/icons/volunteer.png": "7c2b0e4e0cd150fd439e01cd60da1261",
"assets/assets/icons/youtube.png": "92d7341ea8fd5c88350cbd570a145f43",
"assets/assets/images/adh.png": "de160a1d35a114a546f6908efb92debd",
"assets/assets/images/animo.png": "c5e2251fec9c44dee4f7c1881482c369",
"assets/assets/images/ddstechvira.png": "fcf3e8991ab622e53213510004438012",
"assets/assets/images/dileepabandara_dev.png": "8e0f156eb3246cc643cdde0e048eefd8",
"assets/assets/images/drAdd.png": "af5e106e4e3f91a05ac2cd03de7a3e1a",
"assets/assets/images/flutterscope.jpg": "6e6ac7afa9e82b1066c333b672d2e52b",
"assets/assets/images/flutterscope.png": "e4d50de77f5aae73b3920a05328e1a04",
"assets/assets/images/Futuriva.png": "93c1b87ecb87e64024d96f29932e69ba",
"assets/assets/images/github.png": "bada3b2dca0911637f07d961cd7da5d5",
"assets/assets/images/iamPack.png": "3a30107e78d6805b52d18a5920a40877",
"assets/assets/images/khotwa.png": "a3ff3efce266773cf16214217a8c3c43",
"assets/assets/images/logo.png": "8e0f156eb3246cc643cdde0e048eefd8",
"assets/assets/images/mlsa.png": "ac77090e37e75814439d7134e6f38d28",
"assets/assets/images/mms.png": "5842a38c90162e9ce1488cf65080313a",
"assets/assets/images/nibm.png": "b0842646385fb6105a447c069b668579",
"assets/assets/images/sharikCar.png": "bbb8ee119ecd6a4deec57e6e56512a00",
"assets/FontManifest.json": "d5c53906b6d86d304b23aa61eec71815",
"assets/fonts/MaterialIcons-Regular.otf": "057071262697e945e35c87ba124272f4",
"assets/NOTICES": "249c06f8e637b948cc164aaf067c8a22",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/android-chrome-192x192.png": "83938eab55fab01466e0ed6c7ca530b3",
"icons/android-chrome-512x512.png": "72a4a23fd7e5a38f8e3bf4296c5c0b59",
"icons/apple-touch-icon.png": "119461687cf0c83beab4d12c17039f64",
"icons/favicon-16x16.png": "fa89dbc732ec6d07a342f875dc81b733",
"icons/favicon-32x32.png": "426902d74a05f10d8b76b765b0957b06",
"icons/favicon.ico": "af77cb51d2d8a13a6f49cab860610292",
"icons/icon-192-maskable.png": "3835c97708e1788952d43e6a2a081da2",
"icons/icon-192.png": "0acd9f9c92e61e45e7474f900c54efad",
"icons/icon-512-maskable.png": "c1ef942cdfca19bcc456f5903e17736c",
"icons/icon-512.png": "851030b8b32eeaf3b2715b5ddebe0a43",
"index.html": "a26b8216fc6ec5953414da16ce2d0386",
"/": "a26b8216fc6ec5953414da16ce2d0386",
"main.dart.js": "24d99793f464a8fdb1bbb22792601f23",
"manifest.json": "775fe3a694fe42774299aebb2d548cd2",
"splash/img/dark-1x.png": "b071f4defb9b298e36038b0eeb26199d",
"splash/img/dark-2x.png": "b071f4defb9b298e36038b0eeb26199d",
"splash/img/dark-3x.png": "b071f4defb9b298e36038b0eeb26199d",
"splash/img/dark-4x.png": "b071f4defb9b298e36038b0eeb26199d",
"splash/img/light-1x.png": "b071f4defb9b298e36038b0eeb26199d",
"splash/img/light-2x.png": "b071f4defb9b298e36038b0eeb26199d",
"splash/img/light-3x.png": "b071f4defb9b298e36038b0eeb26199d",
"splash/img/light-4x.png": "b071f4defb9b298e36038b0eeb26199d",
"splash/splash.js": "d6c41ac4d1fdd6c1bbe210f325a84ad4",
"splash/style.css": "9917b3496bafc85c32a8e01bea7d6427",
"version.json": "e5d57d4e475cc8a711764c8aef61d978"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
