// Basic route that sends the user first to the AJAX Page
var express = require("express");
const path = require("path");
const router = express.Router();

router.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

router.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/reserve.html"));
});


router.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/tables.html"));
});

module.exports = router;