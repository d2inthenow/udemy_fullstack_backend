const express = require('express')

const routerAPI = express.Router()

const { getUsersApi, postCreateUserAPI, putUpdateUserAPI, DeleteUserApi, postUploadSingleFile, postUploadMultipleFile, } = require('../controllers/apiController')

const { postCreateCustomer, postCreateArrayCustomer, getAllCustomer, DeleteACustomer, DeleteArrayCustomer } = require('../controllers/customerController')
routerAPI.get('/user', getUsersApi);
routerAPI.post('/user', postCreateUserAPI);
routerAPI.put('/user', putUpdateUserAPI);
routerAPI.delete('/user', DeleteUserApi);

routerAPI.post('/file', postUploadSingleFile);
routerAPI.post('/files', postUploadMultipleFile);

routerAPI.get('/customers', getAllCustomer);
routerAPI.post('/customers', postCreateCustomer);
routerAPI.delete('/customers', DeleteACustomer);
routerAPI.post('/customers-many', postCreateArrayCustomer);
routerAPI.delete('/customers-many', DeleteArrayCustomer);

routerAPI.get('/info', (req, res) => {
    return res.status(200).json({
        data: req.query
    })
});

routerAPI.get('/info/:name/:address', (req, res) => {
    console.log(">>>>CHECK = ", req.params)
    return res.status(200).json({
        data: req.params
    })
});







module.exports = routerAPI;

