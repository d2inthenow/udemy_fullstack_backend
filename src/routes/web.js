const express = require('express')
const router = express.Router()
const { getHomepage, getSample, postCreateUser, getCreateUser } = require('../controllers/homeController')

// middleware that is specific to this router

router.get('/', getHomepage);

router.get('/sam', getSample);

router.post('/create-user', postCreateUser);

router.get('/create', getCreateUser)

module.exports = router

