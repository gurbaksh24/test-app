var path = require("path");
var express = require('express');
var app=express();

app.use(express.static(__dirname + "/"));

app.get('/',function(req,res){ //req is request and res is response
        res.sendFile(__dirname + '/index.html');
        
        }); 

app.get('/Documentatiion.html',function(req,res){
    res.sendFile(__dirname + '/Documentation.html');
})

app.listen(3000,function(){
    console.log("Listening on port 3000");
});//You need to activate a port .