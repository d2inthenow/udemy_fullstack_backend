const express = require('express')
const router = express.Router()
const { getHomepage, getSample, postCreateUser, getCreateUser, getUpdateUser, postUpdateUser } = require('../controllers/homeController')

// middleware that is specific to this router

router.get('/', getHomepage);

router.get('/sam', getSample);

router.post('/create-user', postCreateUser);

router.get('/create', getCreateUser)

router.get('/update/:Id', getUpdateUser)

router.post('/update-user', postUpdateUser);

module.exports = router

