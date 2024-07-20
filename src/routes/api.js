const express = require('express')

const routerAPI = express.Router()

const { getUsersApi, postCreateUserAPI, putUpdateUserAPI, DeleteUserApi, postUploadSingleFile, postUploadMultipleFile, } = require('../controllers/apiController')

const { postCreateCustomer, postCreateArrayCustomer } = require('../controllers/customerController')
routerAPI.get('/user', getUsersApi);
routerAPI.post('/user', postCreateUserAPI);
routerAPI.put('/user', putUpdateUserAPI);
routerAPI.delete('/user', DeleteUserApi);

routerAPI.post('/file', postUploadSingleFile);
routerAPI.post('/files', postUploadMultipleFile);


routerAPI.post('/customers', postCreateCustomer);
routerAPI.post('/customers-many', postCreateArrayCustomer);






module.exports = routerAPI;

