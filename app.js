const { response } = require("express");
const express = require("express");
const app = express();
const hostname = '127.0.0.1';
const port = 5000;
var request = require('request');

app.get("/" , (req,res) => res.send("This is the test server for client info"));
app.listen(port, () => console.log('HostName: ' + hostname ,'Listening on port: ' + port))