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
    const keyChecker = req.query["hub.verify_token"];
    const challenge = req.query["hub.challenge"];

    if (keyChecker === "helloworld") {
        res.send(challenge);
        console.log(`token: ${keyChecker}, challenge: ${challenge}`)
    }
    else
        res.send(403);
});

exp.post("/echo", (req, res) => {
    console.log("hello world");
    // const echotext = `Received message was "${req.body.echothis}"`;
    console.log(req.body);
    res.send(req.body);

});


exp.get


exp.listen(port, () => {
    console.log(`express app listening to port ${port}`);
});