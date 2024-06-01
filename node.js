const nodemailer = require("nodemailer");
const express = require("express");

require("dotenv").config();

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // Use `true` for port 465, `false` for all other ports
    auth: {
        user: "esp576678@gmail.com",
        pass: "ldev rlgn pmwx egjc",
    },
});

const messIsOpened = {
    from: {
        name: 'IoT',
        address: 'esp576678@gmail.com'
    },
    to: ["hazemhashem100@gmail.com", "midoibrahim432@gmail.com", "ms2942@fayoum.edu.eg"], // Add valid recipient email addresses here
    subject: "Door Status From esp ✔",
    html: "<b>Door is Opened</b>",
}
// message for door is colosed
const messIsClosed = {
    from: {
        name: 'IoT',
        address: 'esp576678@gmail.com'
    },
    to: ["hazemhashem100@gmail.com", "midoibrahim432@gmail.com", "ms2942@fayoum.edu.eg"], // Add valid recipient email addresses here
    subject: "Door Status From esp ✔",
    html: "<b>Door is closed</b>",
}


const sendMailDoorIsOpend = async (transporter, messIsOpened) => {  // Door is opend
    try {
        await transporter.sendMail(messIsOpened); // Pass mailOptions to sendMail function
        console.log('Email has been sent');
    } catch (error) {
        console.error(error);
    }
}


const sendMailDoorIsClosed = async (transporter, messIsClosed) => {  // Door is opend
    try {
        await transporter.sendMail(messIsClosed); // Pass mailOptions to sendMail function
        console.log('Email has been sent');
    } catch (error) {
        console.error(error);
    }
}

const app = express();

// const getmessage = async (request, response) => {
//     try {
//         sendMail(transporter, mailOptions);
//     } catch (error) {
//         console.error('Error in getUsers:', error);
//         response.status(500).send('Internal Server Error');
//     }
// };


app.get('/', (req, res) => {


    res.send("Welcome");
})


app.get('/open', (req, res) => {

    res.send(sendMailDoorIsOpend(transporter, messIsOpened));
    console.log("mess is sent");
})

app.get('/close', (req, res) => {

    res.send(sendMailDoorIsClosed(transporter, messIsClosed));
    console.log("mess is sent");
})


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is Running on Port ${PORT}`);
});