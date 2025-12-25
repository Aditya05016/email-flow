const express = require("express");
const router = express.Router();
const sendEmail = require("../utils/email");

router.post("/send-email", async (req, res) => {
  try {
    const { to, subject, body } = req.body;

    // validation
    if (!to || !subject || !body) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    // send email
    await sendEmail({ to, subject, body });

    return res.status(200).json({
      message: "Email sent successfully",
    });
  } catch (error) {
    console.error("Error sending email:", error);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
});

module.exports = router;
