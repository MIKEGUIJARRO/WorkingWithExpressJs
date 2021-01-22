const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const rootDir = require("./util/path")


const adminRoute = require("./routes/admin");
const shopRoute = require("./routes/shop");

const app = express();

//by default, req don parse the incoming request body
//Do body parsing!
//Should be able to parse 
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/admin", adminRoute);
app.use(shopRoute);
app.use((req, res, next) => {
    res.status(404).sendFile(path.join(rootDir, "views", "404.html"));
});

/* app.use("/get-user", (req, res, next)=> {
    console.log("GU / The first Middleware");
    next();
}); */


/* // Normal way of pass midlewares
app.use("/",(req, res, next)=>{
    console.log("Main / In the first middleware");
    next();
    //This allow the request to continue to the next middleware in line
}); */



app.listen(3000);