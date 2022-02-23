const cloudinary = require("cloudinary").v2;

export default function signature(req, res) {
  // Get the timestamp in seconds
  const timestamp = Math.round(new Date().getTime() / 1000);

  // Get the signature using the Node.js SDK method api_sign_request
  const signature = cloudinary.utils.api_sign_request(
    {
      timestamp: timestamp,
    },
    process.env.CLOUD_SECRET
  );

  res.statusCode = 200;
  res.json({ signature, timestamp });
}