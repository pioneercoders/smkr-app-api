const nodemailer = require('nodemailer');

module.exports = function sendEmail(contact) {
    console.log("email send request recived.", contact)
    // Create a transporter using SMTP or some other transport mechanism
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com', // e.g., 'Gmail', 'Outlook'
        port: 587,
        secure: false,
        auth: {
            user: 'dev4naveen@gmail.com',
            pass: 'bgivwnyyztwgesus'
        },
    });

    // Define the email data
    const mailOptions = {
        from: 'dev4naveen@gmail.com', // Sender address
        to: 'sunilchowdary35190@gmail.com', // Recipient's email address
        subject: 'New Contact For SMKR', // Email subject
        text: `New contact request recived from: ${contact.name} with Email:${contact.email } and mobile: ${contact.mobile} and Message: ${contact.message}, please take a look.` // Email content
    };

    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
        } else {
            console.log('Email sent successfully:', info.response);
        }
    });

};