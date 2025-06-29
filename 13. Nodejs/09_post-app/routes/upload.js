import express from "express";
import multer from "multer";
import cloudinary from 'cloudinary';
import "dotenv/config"
import fs from "fs"


// Configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET // Click 'View API Keys' above to copy your API secret
});

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "images/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

const router = express.Router();

router.post("/", upload.single("file"), (req, res) => {
  console.log("req-->", req.file);
  
  fs.readdirSync("images/").forEach((file) => {
    // console.log("file-->", file);
    cloudinary.v2.uploader.upload(`images/${file}`, {}, (error, result) => {
      // console.log(result, error);
      // Delete example_file.txt
      fs.unlink(`images/${file}`,
        (err => {
          if (err) console.log(err);
          else {
            console.log("success!");
          }
        }));
      if (error) {
        return res.status(401).send({ status: 401, message: "file not uploaded!", err: error });
      }
      res.status(200).send({ status: 200, message: "file uploaded successfully!", data: result.url });
    });
  })

});

export default router;
