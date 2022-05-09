require("./db/connection");
const express = require("express");
const { route } = require("express/lib/router");
const app = express();


//static 
app.use('/static',express.static(__dirname+"/static"))

//middleware to encode the post request
app.use(express.urlencoded({extended :true}));

//template engine
app.set("view engine","ejs");
app.set("views",__dirname+"/views");

//adding the router files
const router = require("./controller/router.js")
app.use(router);


const port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log(`connection is running at port. ${port}`);
})
