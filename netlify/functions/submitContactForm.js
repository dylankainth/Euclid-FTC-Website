// use nodemailer to send an email to the admin when a contact form is submitted

const nodemailer = require('nodemailer');

const generateEmail = (text = {}) => {
    return `
        <div className="email" style="
            border: 1px solid black;
            padding: 20px;
            font-family: sans-serif;
            line-height: 2;
            font-size: 20px;
        ">
            <h2>Hello There!</h2>
            <p>You have a new message from ${text.name}</p>
            <p>You can contact them at ${text.email}</p>
            <p>${text.message}</p>
        </div>
    `;
}

exports.handler = async (event, context) => {
    const { name, email, message } = JSON.parse(event.body);
    
    // const transporter = nodemailer.createTransport({
    //     host: process.env.MAIL_HOST,
    //     port: process.env.MAIL_PORT,
    //     auth: {
    //     user: process.env.MAIL_USER,
    //     pass: process.env.MAIL_PASS,
    //     },
    // });

    const transporter = nodemailer.createTransport({
        host: 'smtp.zoho.eu',
        port: 465,
        secure: true,
        auth: {
            user: 'teameuclid@zohomail.eu',
            pass: 'Timodore87'
        }
    });

    
    const info = await transporter.sendMail({
        from: 'FTC Team Euclid <ftceuclid@gmail.com>',
        to: 'Dylan Kainth <19kainthd@harrowschool.org.uk>',
        subject: 'New Message at FTC Website',
        html: generateEmail({ name, message, email }),
    });

    return {
        statusCode: 200,
        body: JSON.stringify({ message: 'Success' }),
    };
};

