const connection = require('../config/database')

let user = [];
const getHomepage = (req, res) => {
    return res.render('home.ejs');
}

const getSample = (req, res) => {
    res.render('sample.ejs');
}

const postCreateUser = async (req, res) => {

    let email = req.body.email;
    let name = req.body.name;
    let city = req.body.city;

    console.log(">>>email: ", email, ">>>name: ", name, "city: ", city)

    // or 
    // let {emai , name , city } = req.body;

    // connection.query(
    //     `INSERT INTO Users (email, name, city) 
    //          VALUES(?,?,?)`,
    //     [email, name, city],
    //     function (err, results) {
    //         console.log(results);
    //         res.send('Create succeed')// results contains rows returned by server
    //     }
    // );
    let [results, fields] = await connection.query(
        `INSERT INTO Users (email, name, city) 
        VALUES(?,?,?)`,
        [email, name, city]
    );
    console.log(results)
    return res.send("successed")




    // connection.query(
    //     'SELECT * FROM `Users`',
    //     function (err, results) {
    //         console.log(">>>results = ", results); // results contains rows returned by server
    //     }
    // );

    // const [results, fields] = await connection.query('SELECT * FROM `Users`');
    // return res.send('Create succeed')

};
const getCreateUser = (req, res) => {
    res.render('create.ejs');
}

module.exports = {
    getHomepage,
    getSample,
    postCreateUser,
    getCreateUser
}