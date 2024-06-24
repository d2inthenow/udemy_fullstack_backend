require('dotenv').config();

const configViewEngine = require('./config/viewEngine');

const { Template } = require('ejs');
const express = require('express');
const app = express();


const port = process.env.PORT || 3333;

const hostname = process.env.HOST_NAME;

const webRouter = require('./routes/web');

//config Template engine
configViewEngine(app);


//khai bao route
app.use('/', webRouter)


app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
});