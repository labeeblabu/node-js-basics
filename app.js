// const http = require('http');
// const routes= require('./routes');
// const server=http.createServer(routes)
// server.listen(3000)
//______________________________________________________________

const express = require('express');

const app=express();
app.use((req,res,next) => {
    console.log(`in the middleware`);
    // res.send(`<h1> hello world!</h1>`);
    next();
})
app.use((req,res,next) => {
    console.log(`in another middleware`);
    res.send(`<h1> hello world2!</h1>`);
})
app.listen(3000)