require('dotenv').config();

const configViewEngine = require('./config/viewEngine');

const { Template } = require('ejs');
const express = require('express');
const app = express();


const port = process.env.PORT || 3333;

const hostname = process.env.HOST_NAME;

const webRouter = require('./routes/web');

const connnection = require('./config/database')

const mongoose = require('mongoose');


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//config Template engine
configViewEngine(app);

//khai bao route
app.use('/', webRouter);

const kittySchema = new mongoose.Schema({
    name: String
});

const Kitten = mongoose.model('Kitten', kittySchema);

const silence = new Kitten({ name: 'Duong' });

silence.save();
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
