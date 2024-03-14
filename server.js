const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors'); 

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors()); // Enable CORS for all routes

// Nodemailer transporter setup
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'smtp@gmail.com', // Replace with sender's email address
        pass: 'smtp_password' // Replace with SMTP password or app password
    }
});

// Route for sending emails
app.post('/send-email', (req, res) => {
    const { senderName, senderEmail, subject, text } = req.body;

    // Email data
    const mailOptions = {
        from: `"${senderName}" <${senderEmail}>`,
        to: 'recipient@example.com', // Replace with recipient's email address
        subject: subject,
        text: `Sender: ${senderName} <${senderEmail}>\n\n${text}`
    };

    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error);
            res.status(500).send('Error sending email');
        } else {
            console.log('Email sent: ' + info.response);
            res.status(200).send('Email sent successfully');
        }
    });
});

// Start server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
