const express = require("express");
const router = require("express").Router();
const exp = express();
const port = 9999;

exp.use(express.json());
exp.use(express.urlencoded({ extended: true }));


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

    // const echotext = `Received message was "${req.body.echothis}"`;
    console.log(req.body);
    res.send(req.body);

});


exp.get


exp.listen(port, () => {
    console.log(`express app listening to port ${port}`);
});
