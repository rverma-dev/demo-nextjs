const { setupDevPlatform } = require('@cloudflare/next-on-pages/next-dev');

// https://github.com/cloudflare/next-on-pages/blob/5712c57ea7/internal-packages/next-dev/README.md
if (process.env.NODE_ENV === 'development') {
  (async () => {
    await setupDevPlatform();
  })();
}

const nextConfig = {};

module.exports = nextConfig;
