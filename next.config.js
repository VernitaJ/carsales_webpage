module.exports = {
  env: {
    MONGO_URI: "mongodb+srv://vgouws:vgouws@cluster0.wbd9s.mongodb.net/autodb",
    MONGODB_DB: "autodb",
    DEV_URL: "http://localhost:3000",
    PROD_URL: "http://autolink.vercel.com",
  },
  reactStrictMode: true,
};

/*Drake's

// @type {import('next').NextConfig} 
const IS_DEV = process.env.NODE_ENV === "development";
module.exports = {
  reactStrictMode: true,
  images: {
    loader: "cloudinary",
    path: "https://res.cloudinary.com/draxel/image/upload/",
    domains: ["res.cloudinary.com"],
  },
  env: {
    IS_DEV: IS_DEV,
    VERCEL_URL: process.env.VERCEL_URL
  },
};

export const getAbsoluteURL = (path: any) => {
  const baseURL = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000";
  return baseURL + path;
};
*/
