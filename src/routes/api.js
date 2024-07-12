const express = require('express')

const routerAPI = express.Router()

const { getUsersApi } = require('../controllers/apiController')

routerAPI.get('/', (req, res) => {
    res.status(200).json({
        data: 'hello word API'
    });
});
routerAPI.get('/user', getUsersApi);

module.exports = routerAPI;

