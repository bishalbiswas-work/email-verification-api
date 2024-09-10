const emailController = require('./controllers/emailController');

const cors = require("cors");
const express = require("express");
const app = express();




app.use(express.json()); // For parsing application/json

const whitelist = [
    "http://localhost:3000",
    "http://localhost:5000",
    "http://localhost:5001",
    "http://localhost:5002",

    "https://emailverificationapi.com ",
    "https://www.emailverificationapi.com ",
    "https://api.emailverificationapi.com",
];


const corsOptions = {
    origin: function (origin, callback) {
        if (whitelist.includes(origin) || !origin) {
            callback(null, true);
        } else {
            callback(new Error("Not allowed by CORS"));
        }
    },
};

app.use(cors(corsOptions));

app.post('/send-email', emailController.sendEmail);



let PORT = 5001;

if (process.env.NODE_ENV === "production") {
    PORT = 5001;
} else {
    PORT = 5001;
}

app.listen(PORT, () => {
    console.log(`Server running at :${PORT}`);
});