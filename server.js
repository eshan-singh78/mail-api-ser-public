const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;


app.use(cors());

app.use(bodyParser.json());


const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'smtp@gmail.com',
        pass: 'smtp-password'
    }
});


app.post('/send-email', (req, res) => {
    const { senderName, senderEmail, subject, text } = req.body;


    const mailOptions = {
        from: `"${senderName}" <${senderEmail}>`,
        to: 'your-mail@gmail.com',
        subject: subject,
        text: `Sender: ${senderName} <${senderEmail}>\n\n${text}`
    };


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


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
