const nodemailer = require("nodemailer");

const sendMail = async (req, res) => {
    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'skylar.marvin@ethereal.email',
            pass: 't4Mbh9GNtNj1Xfg9FZ'
        }

    });

    const info = await transporter.sendMail({
        from: "skylar.marvin@ethereal.email", // sender address
        to: "ad707011@gmail.com", // list of receivers
        subject: "Hello akash dhakar", // Subject line
        text: "Hello this email", // plain text body
        html: "<b>Hello akash good afternoon</b>", // html body
    });

    console.log("Message sent: %s", info.messageId);
    res.send("mail")
}


module.exports = sendMail