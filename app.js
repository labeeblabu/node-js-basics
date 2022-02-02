// const http = require('http');
// const routes= require('./routes');
// const server=http.createServer(routes)
// server.listen(3000)
//______________________________________________________________

const express = require('express');
const bodyParser = require('body-parser');
const app=express();
const adminRoutes=require(`./routes/admin.js`);
const shopRoutes = require(`./routes/shop.js`)
app.use(bodyParser.urlencoded({extended:false}));
app.use(adminRoutes)
app.use(shopRoutes);
app.use((req, res, next) => {
    res.status(404).send(`<h1>Error</h1>`)
})
app.listen(3000)