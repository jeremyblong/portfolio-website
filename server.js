// import usable modules
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const config = require("config");
const http = require("http");
const { v4: uuidv4 } = require('uuid');
const S3 = require('aws-sdk/clients/s3');
const AWS = require('aws-sdk');
const wasabiEndpoint = new AWS.Endpoint('s3.us-west-1.wasabisys.com');
const mongo = require("mongodb");
const server = http.createServer(app);
const _ = require("lodash");

server.timeout = 1000 * 60 * 10;

const accessKeyId = config.get("wasabiAccessKey");
const secretAccessKey = config.get("wasabiSecretKey");


const s3 = new S3({
	endpoint: wasabiEndpoint,
	region: 'us-west-1',
	accessKeyId,
	secretAccessKey
});
// !important stuff...
const PORT = process.env.PORT || 5000;
// db
const mongoDB = require("./config/db.js");

mongoDB();

app.use('*', cors());

app.use(bodyParser.urlencoded({
  limit: "800mb",
  extended: false
}));
app.use(bodyParser.json({
	limit: "800mb"
}));

app.use(express.json({limit: '800mb'}));
app.use(express.urlencoded({limit: '800mb', extended: true }));

// routes go here...
app.use(express.static(path.join(__dirname, 'client/build')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});  
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});  

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", '*');
    res.header("Access-Control-Allow-Credentials", true);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
    next();
});

if (process.env.NODE_ENV === "production") {
	// Express will serve up production files
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    });  
    app.get('/*', (req, res) => {
        res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    });  
    
}; 

app.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}!`);
});
