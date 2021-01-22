const express = require("express");
const path = require("path");
const rootDir = require("../util/path");

const Router = express.Router();

//admin/add-product
Router.get("/add-product", (req, res, next) => {
    console.log("GU / The final Middleware: ", req.originalUrl);
    res.sendFile(path.join(rootDir, "views", "add-product.html"));
});

Router.post("/product", (req, res, next) => {
    const body = req.body;
    console.log(body);
    res.redirect("/");
});

module.exports = Router;