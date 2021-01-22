const express = require("express");

const path = require("path");

const Router = express.Router();

Router.get("/",(req, res, next)=>{ 
    console.log("Main / The final Middleware: ", req.originalUrl);
    //__dirname is a variable that holds the path of this folder
    res.sendFile(path.join(__dirname,"../", "views", "shop.html"));
});

module.exports = Router;