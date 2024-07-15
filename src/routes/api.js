const express = require('express')

const routerAPI = express.Router()

const { getUsersApi, postCreateUserAPI, putUpdateUserAPI, DeleteUserApi } = require('../controllers/apiController')

routerAPI.get('/user', getUsersApi);

routerAPI.post('/user', postCreateUserAPI);

routerAPI.put('/user', putUpdateUserAPI);


routerAPI.delete('/user', DeleteUserApi);



module.exports = routerAPI;

