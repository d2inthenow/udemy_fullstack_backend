require('dotenv').config();

const configViewEngine = require('./config/viewEngine');

const { Template } = require('ejs');
const express = require('express');
const app = express();


const port = process.env.PORT || 3333;

const hostname = process.env.HOST_NAME;

const webRouter = require('./routes/web');

const connection = require('./config/database')



//config Template engine
configViewEngine(app);

//khai bao route
app.use('/', webRouter)

// A simple SELECT query
connection.query(
    'SELECT * FROM `Users`',
    function (err, results) {
        console.log(">>>results = ", results); // results contains rows returned by server
    }
);

app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
}); 