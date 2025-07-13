import nodemailer from "nodemailer"

// Create a test account or replace with real credentials.
const transporter = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  service:"gmail",
  auth: {
    user: "<YOUR_EMAIL>",
    pass: "<APP_PASSWORD>",
  },
});

export default transporter;