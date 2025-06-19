import nodemailer from "nodemailer"

// Create a test account or replace with real credentials.
const transporter = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  service:"gmail",
  auth: {
    user: "asifahmed32c@gmail.com",
    pass: "gbmuftidgocajsqu",
  },
});

export default transporter;