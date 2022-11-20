const express = require("express");

const app = express();

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/src/App.js");
})

app.listen(5000, function () {
    console.log("Server started on port 5000");
});