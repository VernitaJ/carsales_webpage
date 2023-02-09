module.exports = {
  images: {
    domains: ["media.graphassets.com"],
  },
  resolve: {
    fallback: {
      fs: false,
    },
  },
  env: {
    MONGO_URI: "mongodb+srv://vgouws:vgouws@cluster0.wbd9s.mongodb.net/autodb",
    MONGODB_DB: "autodb",
    DEV_URL: "http://localhost:3000",
    PROD_URL: "http://autolink.vercel.com",
  },
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};
