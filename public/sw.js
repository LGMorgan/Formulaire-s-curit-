if (!self.define) {
  let e,
    s = {}
  const a = (a, n) => (
    (a = new URL(a + ".js", n).href),
    s[a] ||
      new Promise((s) => {
        if ("document" in self) {
          const e = document.createElement("script")
          ;(e.src = a), (e.onload = s), document.head.appendChild(e)
        } else (e = a), importScripts(a), s()
      }).then(() => {
        let e = s[a]
        if (!e) throw new Error(`Module ${a} didn’t register its module`)
        return e
      })
  )
  self.define = (n, c) => {
    const t = e || ("document" in self ? document.currentScript.src : "") || location.href
    if (s[t]) return
    let i = {}
    const r = (e) => a(e, t),
      d = { module: { uri: t }, exports: i, require: r }
    s[t] = Promise.all(n.map((e) => d[e] || r(e))).then((e) => (c(...e), i))
  }
}
define(["./workbox-5f5b08d6"], function (e) {
  "use strict"
  importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        {
          url: "/_next/static/UQeLvO8bMOBCfC5nK0Nyq/_buildManifest.js",
          revision: "430339f5d7b83a089efdda6f819b647f",
        },
        {
          url: "/_next/static/UQeLvO8bMOBCfC5nK0Nyq/_ssgManifest.js",
          revision: "b6652df95db52feb4daf4eca35380933",
        },
        {
          url: "/_next/static/chunks/483-5e3ddf4a4702a31bf4f7.js",
          revision: "5e3ddf4a4702a31bf4f7",
        },
        {
          url: "/_next/static/chunks/642-86a6cad9dc3586573245.js",
          revision: "86a6cad9dc3586573245",
        },
        {
          url: "/_next/static/chunks/695-48122018da2f8cf2757e.js",
          revision: "48122018da2f8cf2757e",
        },
        {
          url: "/_next/static/chunks/827-d7659c966b797cc6fb15.js",
          revision: "d7659c966b797cc6fb15",
        },
        {
          url: "/_next/static/chunks/ef6529d7-1fa6e35922e40b8a2244.js",
          revision: "1fa6e35922e40b8a2244",
        },
        {
          url: "/_next/static/chunks/framework-4fa35c9cf30088839e4d.js",
          revision: "4fa35c9cf30088839e4d",
        },
        {
          url: "/_next/static/chunks/main-3f436e6820a604c3e6bf.js",
          revision: "3f436e6820a604c3e6bf",
        },
        {
          url: "/_next/static/chunks/pages/404-3a1d928901691096baf0.js",
          revision: "3a1d928901691096baf0",
        },
        {
          url: "/_next/static/chunks/pages/Dashboard-1e5403946973beb99507.js",
          revision: "1e5403946973beb99507",
        },
        {
          url: "/_next/static/chunks/pages/MainForm-2435a172522ffbb56440.js",
          revision: "2435a172522ffbb56440",
        },
        {
          url: "/_next/static/chunks/pages/PrefillPage-3d82df79f6ba2a49005c.js",
          revision: "3d82df79f6ba2a49005c",
        },
        {
          url: "/_next/static/chunks/pages/Reader-a02ffacfb674375116a2.js",
          revision: "a02ffacfb674375116a2",
        },
        {
          url: "/_next/static/chunks/pages/_app-3ba4597f35935edd79fd.js",
          revision: "3ba4597f35935edd79fd",
        },
        {
          url: "/_next/static/chunks/pages/_error-737a04e9a0da63c9d162.js",
          revision: "737a04e9a0da63c9d162",
        },
        {
          url: "/_next/static/chunks/pages/forgot-password-fe6f7bc4dec6c03dc4c7.js",
          revision: "fe6f7bc4dec6c03dc4c7",
        },
        {
          url: "/_next/static/chunks/pages/index-2297c36ce52c12474fa4.js",
          revision: "2297c36ce52c12474fa4",
        },
        {
          url: "/_next/static/chunks/pages/login-f0123b9901edba4eddd4.js",
          revision: "f0123b9901edba4eddd4",
        },
        {
          url: "/_next/static/chunks/pages/questions-0af9252b47e70c209142.js",
          revision: "0af9252b47e70c209142",
        },
        {
          url: "/_next/static/chunks/pages/questions/%5BquestionId%5D-76752ef98d6ea0874d8b.js",
          revision: "76752ef98d6ea0874d8b",
        },
        {
          url: "/_next/static/chunks/pages/questions/%5BquestionId%5D/edit-4df4c1da898263d6e9a7.js",
          revision: "4df4c1da898263d6e9a7",
        },
        {
          url: "/_next/static/chunks/pages/questions/new-fa25c7e054817e98d6c2.js",
          revision: "fa25c7e054817e98d6c2",
        },
        {
          url: "/_next/static/chunks/pages/reset-password-b3e6be88f9c9924e5e00.js",
          revision: "b3e6be88f9c9924e5e00",
        },
        {
          url: "/_next/static/chunks/pages/sections-b38db57e8722b0f0b5de.js",
          revision: "b38db57e8722b0f0b5de",
        },
        {
          url: "/_next/static/chunks/pages/sections/%5BsectionId%5D-250152ad8b8a798e0064.js",
          revision: "250152ad8b8a798e0064",
        },
        {
          url: "/_next/static/chunks/pages/sections/%5BsectionId%5D/edit-e92af16c16feeecdb98e.js",
          revision: "e92af16c16feeecdb98e",
        },
        {
          url: "/_next/static/chunks/pages/sections/new-2ac978a42e9d053d898a.js",
          revision: "2ac978a42e9d053d898a",
        },
        {
          url: "/_next/static/chunks/pages/sheets-160ad6b5e62d14c61624.js",
          revision: "160ad6b5e62d14c61624",
        },
        {
          url: "/_next/static/chunks/pages/sheets/%5BsheetId%5D-e6aced2506897845fdbd.js",
          revision: "e6aced2506897845fdbd",
        },
        {
          url: "/_next/static/chunks/pages/sheets/%5BsheetId%5D/edit-e8944889359540ce4fac.js",
          revision: "e8944889359540ce4fac",
        },
        {
          url: "/_next/static/chunks/pages/sheets/new-d4048e8beb21aac47e54.js",
          revision: "d4048e8beb21aac47e54",
        },
        {
          url: "/_next/static/chunks/pages/signup-5abb881812ed377f40ea.js",
          revision: "5abb881812ed377f40ea",
        },
        {
          url: "/_next/static/chunks/polyfills-a54b4f32bdc1ef890ddd.js",
          revision: "a54b4f32bdc1ef890ddd",
        },
        {
          url: "/_next/static/chunks/webpack-0e0f5c5c9fa5a29e0d78.js",
          revision: "0e0f5c5c9fa5a29e0d78",
        },
        { url: "/_next/static/css/0a244e393699890d4332.css", revision: "0a244e393699890d4332" },
        { url: "/_next/static/css/4e9e87d2a6a66272aadc.css", revision: "4e9e87d2a6a66272aadc" },
        { url: "/_next/static/css/6ee17431701069b1890a.css", revision: "6ee17431701069b1890a" },
        { url: "/_next/static/css/9e5826cc92223a05ad06.css", revision: "9e5826cc92223a05ad06" },
        { url: "/_next/static/css/a0e8ac734128891c0f31.css", revision: "a0e8ac734128891c0f31" },
        { url: "/_next/static/css/dec97b3ee6498eaea754.css", revision: "dec97b3ee6498eaea754" },
        {
          url: "/_next/static/image/public/logo.c7cef1afc7e012994ec94fb634b8f69a.png",
          revision: "5bd5546d2b6a2318b19c26ebb4074e16",
        },
        { url: "/favicon.ico", revision: "1b71789cb5f08b172a127eb6930d4392" },
        { url: "/logo.png", revision: "5bd5546d2b6a2318b19c26ebb4074e16" },
        { url: "/manifest.json", revision: "e3034c0b569085e96412e21d3aca578d" },
      ],
      { ignoreURLParametersMatching: [] }
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      "/",
      new e.NetworkFirst({
        cacheName: "start-url",
        plugins: [
          {
            cacheWillUpdate: async ({ request: e, response: s, event: a, state: n }) =>
              s && "opaqueredirect" === s.type
                ? new Response(s.body, { status: 200, statusText: "OK", headers: s.headers })
                : s,
          },
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: "google-fonts-webfonts",
        plugins: [new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 })],
      }),
      "GET"
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
      new e.StaleWhileRevalidate({
        cacheName: "google-fonts-stylesheets",
        plugins: [new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 })],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-font-assets",
        plugins: [new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 })],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-image-assets",
        plugins: [new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 })],
      }),
      "GET"
    ),
    e.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new e.StaleWhileRevalidate({
        cacheName: "next-image",
        plugins: [new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 })],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:mp3|wav|ogg)$/i,
      new e.CacheFirst({
        cacheName: "static-audio-assets",
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:mp4)$/i,
      new e.CacheFirst({
        cacheName: "static-video-assets",
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-js-assets",
        plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-style-assets",
        plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })],
      }),
      "GET"
    ),
    e.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new e.StaleWhileRevalidate({
        cacheName: "next-data",
        plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: "static-data-assets",
        plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1
        const s = e.pathname
        return !s.startsWith("/api/auth/") && !!s.startsWith("/api/")
      },
      new e.NetworkFirst({
        cacheName: "apis",
        networkTimeoutSeconds: 10,
        plugins: [new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 })],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1
        return !e.pathname.startsWith("/api/")
      },
      new e.NetworkFirst({
        cacheName: "others",
        networkTimeoutSeconds: 10,
        plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => !(self.origin === e.origin),
      new e.NetworkFirst({
        cacheName: "cross-origin",
        networkTimeoutSeconds: 10,
        plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 })],
      }),
      "GET"
    )
})
