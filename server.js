const express= require("express");
const app=express();
const path=require("path");

app.get("/",function(req,res){
    res.sendFile(path.join(__dirname,"/public/IACSD_main.html"));
});

app.get("/Products", function(req,res){
    res.sendFile(path.join(__dirname,"/public/Products.html"));
});

app.listen(3000);
console.log("Server at port 3000");