require('dotenv').config();

const configViewEngine = require('./config/viewEngine');

const { Template } = require('ejs');
const express = require('express');
const app = express();


const port = process.env.PORT || 3333;

const hostname = process.env.HOST_NAME;

const webRouter = require('./routes/web');

const APIRouter = require('./routes/api');


const connnection = require('./config/database');

const mongoose = require('mongoose');

const Kitten = require('./model/Kitten');


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//config Template engine
configViewEngine(app);

//khai bao route
app.use('/', webRouter);

app.use('/v1/api/', APIRouter);


(async () => {
    try {
        await connnection();
        app.listen(port, hostname, () => {
            console.log(`Example app listening on port ${port}`)
        })
    } catch (error) {
        console.log(">>>ERROR CONNECTION DATABASE: ", error)
    }
})();
