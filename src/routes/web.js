const express = require('express')
const router = express.Router()
const { getHomepage, getSample } = require('../controllers/homeController')

// middleware that is specific to this router

router.get('/', getHomepage);

router.get('/sam', getSample);

module.exports = router

