import { sessionMiddleware, simpleRolesIsAuthorized } from "blitz"
const withPWA = require("next-pwa")

const config = {
  middleware: [
    sessionMiddleware({
      cookiePrefix: "classemini",
      isAuthorized: simpleRolesIsAuthorized,
    }),
  ],
  pwa: {
    dest: "public",
    disable: process.env.NODE_ENV === "development",
  },
  /* Uncomment this to customize the webpack config
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Note: we provide webpack above so you should not `require` it
    // Perform customizations to webpack config
    // Important: return the modified config
    return config
  },
  */
}
module.exports = withPWA(config)
