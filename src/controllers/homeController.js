const connection = require('../config/database')

let user = [];
const getHomepage = (req, res) => {
    return res.render('home.ejs');
}

const getSample = (req, res) => {
    res.render('sample.ejs');
}



module.exports = {
    getHomepage,
    getSample
}