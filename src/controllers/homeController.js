const connection = require('../config/database')

let user = [];
const getHomepage = (req, res) => {
    return res.render('home.ejs');
}

const getSample = (req, res) => {
    res.render('sample.ejs');
}

const postCreateUser = (req, res) => {
    console.log(req.body);
    res.send('CREATE NEW USER');
}


module.exports = {
    getHomepage,
    getSample,
    postCreateUser
}