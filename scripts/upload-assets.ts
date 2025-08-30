const cloudinary = require("cloudinary").v2;
const fs = require("fs");
const path = require("path");
require("dotenv").config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const assetsDir = path.join(process.cwd(), "public/assets"); // <-- fixed path

async function uploadImages(dir, folder = "assets") {
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      await uploadImages(filePath, `${folder}/${file}`);
    } else if (/\.(png|jpg|jpeg|webp)$/i.test(file)) {
      const publicId = `${folder}/${path.parse(file).name}`;
      console.log(`📤 Uploading ${filePath} → ${publicId}`);

      try {
        const res = await cloudinary.uploader.upload(filePath, {
          public_id: publicId,
          overwrite: true,
          use_filename: true,
          unique_filename: false,
        });
        console.log(`✅ Uploaded: ${res.secure_url}`);
      } catch (err) {
        console.error(`❌ Failed: ${file}`, err.message);
      }
    }
  }
}

uploadImages(assetsDir).then(() => {
  console.log("🎉 All assets uploaded to Cloudinary!");
});
