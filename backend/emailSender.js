const nodemailer = require('nodemailer');

// Create a transporter object using SMTP transport
let transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'abhinavarya731@gmail.com', // Your email
        pass: 'azwa pkpv sogg ttki' // Your password
    }
});

// Function to send email
const sendEmail = (to, subject, text) => {
    let mailOptions = {
        from: 'abhinavarya731@gmail.com',
        to: to,
        subject: subject,
        text: text
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log('Error occurred while sending email: ', error.message);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
};

module.exports = sendEmail;
