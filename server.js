const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");

// Optional: load .env when running under Node < 20 (20+ supports --env-file)
if (typeof process.loadEnvFile === "function") {
  try {
    process.loadEnvFile();
  } catch (error) {
    // No .env file present — rely on the ambient environment
  }
}

const PORT = process.env.PORT || 5000;
const CONTACT_EMAIL = process.env.CONTACT_EMAIL || "shkmusembi@gmail.com";
const EMAIL_USER = process.env.EMAIL_USER;
const EMAIL_PASS = process.env.EMAIL_PASS;
const MAX_PER_HOUR = Number(process.env.CONTACT_RATE_LIMIT || 5);

const app = express();
app.use(cors());
app.use(express.json({ limit: "16kb" }));
app.use("/", router);

app.listen(PORT, () => console.log(`Contact server running on port ${PORT}`));

if (!EMAIL_USER || !EMAIL_PASS) {
  console.warn(
    "EMAIL_USER and EMAIL_PASS are not set — /contact will return an error until they are configured."
  );
}

const contactEmail = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: EMAIL_USER,
    pass: EMAIL_PASS,
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.warn(`Mail transport not ready: ${error.message}`);
  } else {
    console.log("Mail transport ready");
  }
});

const escapeHtml = (value) =>
  String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

const attempts = new Map();

const rateLimit = (req, res, next) => {
  const key = req.ip || "unknown";
  const now = Date.now();
  const windowMs = 60 * 60 * 1000;
  const recent = (attempts.get(key) || []).filter((t) => now - t < windowMs);

  if (recent.length >= MAX_PER_HOUR) {
    return res
      .status(429)
      .json({ code: 429, message: "Too many messages sent. Try again later." });
  }

  recent.push(now);
  attempts.set(key, recent);
  next();
};

router.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

router.post("/contact", rateLimit, (req, res) => {
  const { firstName, lastName, email, message } = req.body || {};
  const phone = req.body?.phone || "Not provided";

  if (!firstName || !lastName || !email || !message) {
    return res
      .status(400)
      .json({ code: 400, message: "Missing required fields." });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ code: 400, message: "Invalid email address." });
  }

  if (!EMAIL_USER || !EMAIL_PASS) {
    return res
      .status(503)
      .json({ code: 503, message: "Contact service is not configured." });
  }

  const mail = {
    from: `"Portfolio contact form" <${EMAIL_USER}>`,
    to: CONTACT_EMAIL,
    replyTo: email,
    subject: `Portfolio enquiry from ${escapeHtml(firstName)} ${escapeHtml(lastName)}`,
    text: `Name: ${firstName} ${lastName}\nEmail: ${email}\nPhone: ${phone}\n\n${message}`,
    html: `<p><strong>Name:</strong> ${escapeHtml(firstName)} ${escapeHtml(
      lastName
    )}</p>
           <p><strong>Email:</strong> ${escapeHtml(email)}</p>
           <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
           <p><strong>Message:</strong></p>
           <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>`,
  };

  contactEmail.sendMail(mail, (error) => {
    if (error) {
      console.error("Failed to send contact email:", error.message);
      return res
        .status(500)
        .json({ code: 500, message: "Failed to send message." });
    }
    res.json({ code: 200, status: "Message Sent" });
  });
});
