import type { NextApiRequest, NextApiResponse } from "next";
import cloudinary from "@/lib/cloudinary";
import formidable from "formidable";

export const config = {
  api: {
    bodyParser: false, // needed for file upload
  },
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).end("Method Not Allowed");

  const form = new formidable.IncomingForm();

  form.parse(req, async (err, fields, files: any) => {
    if (err) return res.status(500).json({ error: "Form parsing failed" });

    try {
      const file = files.file[0];
      const result = await cloudinary.uploader.upload(file.filepath, {
        folder: "nearhive_uploads",
        transformation: [{ quality: "auto", fetch_format: "auto" }], // auto optimize
      });

      return res.status(200).json({ url: result.secure_url });
    } catch (error) {
      return res.status(500).json({ error: "Upload failed", details: error });
    }
  });
}
