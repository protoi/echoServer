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

exp.post("/echo", (req, res) => {
    // const echotext = `Received message was "${req.body.echothis}"`;

    console.log(req.body);
    res.send(echotext);

});


exp.get


exp.listen(port, () => {
    console.log(`express app listening to port ${port}`);
});