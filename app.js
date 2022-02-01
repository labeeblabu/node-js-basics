// const http = require('http');
// const routes= require('./routes');
// const server=http.createServer(routes)
// server.listen(3000)
//______________________________________________________________

const express = require('express');
const bodyParser = require('body-parser');

const app=express();
app.use(bodyParser.urlencoded({extended:false}));

app.use(`/addproduct`,(req,res,next) => {
    res.send(`<form action="/product" method="POST"><input type='text' name="title"><button type = 'submit'>add product</button></form>`);
})
app.use("/product",(req, res, next) => {
    console.log(req.body);
    res.redirect('/')
})
app.use(`/`,(req,res,next) => {
    res.send(`<h1> hello world</h1>`);
})
app.listen(3000)