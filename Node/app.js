var express=require('express')

const app=express();

app.get("/",function(req,res){
    res.send("Welcome to the node server");
});

app.listen(8080,function(req,res){
    console.log("Server started listening...")
})