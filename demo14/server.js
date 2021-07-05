const express=require('express');
const server=express();
const port=3000;
//GET /welcome
server.get('/welcome',(req,resp)=>{
    resp.sendFile(__dirname+'/welcome.html');
})


//Get /index.html
server.get('/index.html',(req,resp)=>{
    resp.sendFile(__dirname+'/index.html');
})

//Get /js/app.js
server.get('/js/app.js',(req,resp)=>{
    resp.sendFile(__dirname+'/js/app.js');
})
server.listen(port,()=>{
console.log("Server Started ");
console.log("http://localhost:3000/index.html");
});
