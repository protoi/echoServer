const express = require("express");
const router = require("express").Router();
const exp = express();
const port = 9999;

exp.use(express.json());
exp.use(express.urlencoded({ extended: true }));

var axios = require('axios');


function generate_data(phone, text) {
    console.log("generating data");
    var data = JSON.stringify({
        "messaging_product": "whatsapp",
        "to": `${phone}`,
        "type": "text",
        "text": {
            "body": `${text}`
        }
    });
    return data;
}


function send_data(phone_no, text_message) {
    console.log("sending data");
    var config = {
        method: 'post',
        url: 'https://graph.facebook.com/v15.0/105933825735159/messages',
        headers: {
            'Authorization': `Bearer ${process.env.AUTH_TOKEN}`,
            'Content-Type': 'application/json'
        },
        data: generate_data(phone_no, text_message)
    };

    return config;


}

exp.get("/", (req, res) => {
    res.send("Hello world");
});

// exp.get("/name", (req, res) =>{
//     const username = req.query.username;
//     res.send(username);
// });

exp.get("/echo", (req, res) => {
    console.dir("logging message");
    const keyChecker = req.query["hub.verify_token"];
    const challenge = req.query["hub.challenge"];
    console.log(`token: ${keyChecker}, challenge: ${challenge}`)

    if (keyChecker === "helloworld") {
        res.send(challenge);
    }
    else
        res.sendStatus(403);
});

exp.post("/echo", (req, res) => {
    // console.log("hello world");
    // console.dir(req, { depth: null });

    const sender_number = req.body.entry[0].changes[0].value["messages"][0]["from"]
    const sent_message = req.body.entry[0].changes[0].value["messages"][0]["text"]["body"]



    console.log(`number: ${sender_number} message: ${sent_message}`)

    echoed_message = send_data(sender_number, sent_message)
    axios(echoed_message).then(function (response) {
        console.log(JSON.stringify(response.data));
    })
        .catch(function (error) {
            console.log(error);
        });



    // const echotext = `Received message was "${req.body.echothis}"`;
    console.log(req.body);
    res.send(req.body);

});


exp.get


exp.listen(port, () => {
    console.log(`express app listening to port ${port}`);
});
