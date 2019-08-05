var express=require('express');

const app=express();

app.listen(8080,function(req,res){
    console.log("Server Started Listening...")
})

app.get("/",function(req,res){
    res.sendfile(__dirname+"/src/view/home.html")
})
app.get("/emp",function(req,res){
    res.sendfile(__dirname+"/src/view/emp.html")
})

app.get("/emp/pemp",function(req,res){
    res.sendfile(__dirname+"/src/view/pemp.html")
})
app.get("/emp/demp",function(req,res){
    res.sendfile(__dirname+"/src/view/demp.html")
})
app.get("/emp/pemp/:id",function(req,res){
    res.send("Selected Employee is : "+req.params.id)
})




app.get("/prd",function(req,res){
    res.sendfile(__dirname+"/src/view/prd.html")
})
app.get("/prd/wprd",function(req,res){
    res.sendfile(__dirname+"/src/view/wholesale.html")
})
app.get("/prd/rprd",function(req,res){
    res.sendfile(__dirname+"/src/view/retail.html")
})
app.get("/prd/wprd/:wpid",function(req,res){
    res.send("Selected Product is : "+req.params.wpid)
})
app.get("/prd/rprd/:rpid",function(req,res){
    res.send("Selected Product is : "+req.params.rpid)
})



// app.get('/ab?cd',function(req,res){
//     res.send('ab?cd')
// })
// app.get('/ab+cd',function(req,res){
//     res.send('ab+cd')
// })
// app.get('/ab*cd',function(req,res){
//         res.send('ab*cd')
//      })
// app.get('/ab(cd)?e',function(req,res){
//     res.send('ab(cd)?e')
//  })
// app.get(/a/,function(req,res){
//     res.send('/a/')
//  })
// app.get(/.*fly$/,function(req,res){
//     res.send('FLY')
// })
// app.get(/.*fly.*/,function(req,res){
//     res.send('FLY')
// })