var express=require('express')

const app=express();

app.get("/",function(req,res){
    res.send("Welcome to the node server");
});

app.get("/books",function(req,res){
    res.send("Book Details...")
})

app.get("/Author",function(req,res){
    res.send("Author Details")
})

app.listen(8080,function(req,res){
    console.log("Server started listening...")
})

// app.get('/books/:bid',function(req,res){
//     res.send("Book Id : "+req.params.bid)
// })
app.get("/books/poems",function(req,res){
    res.send("Poems")
    req.send("Malayalam Poems")
})