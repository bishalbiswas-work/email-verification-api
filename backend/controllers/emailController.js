const nodemailer = require('nodemailer');

const sendEmail = async (req, res) => {
    const { email } = req.body;
    if (!email) {
        return res.status(400).json({ status: false, message: "Email address is required." });
    }

    let transporter = nodemailer.createTransport({
        host: 'mail.privateemail.com', // Adjust to your SMTP host
        port: 587,
        secure: false,
        auth: {
            user: 'jennifer@247support.club',
            pass: 'jenniferlovessupport123!'
        }
    });

    try {
        await transporter.sendMail({
            from: '"Jennifer" <jennifer@247support.club>',
            to: email,
            subject: 'Please verify your email',
            text: 'Hello, please verify your email by clicking on the link.',
            html: '<b>Hello</b>, please verify your email by clicking on the link.'
        });

        res.json({ status: true, message: "Email address does exists." });
    } catch (error) {
        console.error('Failed to send email:', error);
        res.status(500).json({ status: false, message: "Email address does not exists." });
    }
};
module.exports = {
    sendEmail
};