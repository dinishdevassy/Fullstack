var express=require('express');
var bodyparser=require('body-parser')

const app=express();

app.listen(8080,function(req,res){
    console.log("Server Started Listening...")
})
app.get("/",function(req,res){
    res.sendFile(__dirname+"/src/view/login.html")
})
app.get("/home",function(req,res){
    res.sendFile(__dirname+"/src/view/home.html")
})