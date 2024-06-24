const path = require('path')
const express = require('express')
const configViewEngine = (app) => {

    //config Template engine
    app.set('views', path.join('./src', 'views'));
    app.set('view engine', 'ejs');

    //config static file , css , js 
    app.use(express.static(path.join('./src', 'public')));

}

module.exports = configViewEngine;