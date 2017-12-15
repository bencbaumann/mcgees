var express = require("express");
const path = require("path");
const api = express.Router();
const fs = require('fs');

api.get("/api/tables", function(req, res) {
    // TODO: do clear here
    fs.readFile(path.join(__dirname, '../data/tables.json'),(err, data)=>{
        res.end(data);
    });
});

api.get("/api/waitlist", function(req, res) {
    // TODO: do clear here
});

api.get("/api/clear", function(req, res) {
    // TODO: do clear here
});

module.exports = api;