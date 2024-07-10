const connection = require('../config/database');

const { getAllUsers, getUserById, UpdateUserbyId, deleteUserById } = require('../services/CRUDservices');
let user = [];
const getHomepage = async (req, res) => {
    let results = await getAllUsers();
    // console.log(results)
    return res.render('home.ejs', { listUsers: results });
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
    // console.log(results)
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

const getUpdateUser = async (req, res) => {
    const userId = req.params.Id;
    let user = await getUserById(userId);

    res.render('update.ejs', { userEdit: user });
}

const postUpdateUser = async (req, res) => {

    let email = req.body.email;
    let name = req.body.name;
    let city = req.body.city;
    let id = req.body.id;

    await UpdateUserbyId(email, name, city, id);
    return res.redirect('/');

};
const postDeleteUser = async (req, res) => {
    const userId = req.params.Id;
    let user = await getUserById(userId);

    res.render('delete.ejs', { userEdit: user });
}
const postRemoveUser = async (req, res) => {
    const id = req.body.id;
    await deleteUserById(id);

    return res.redirect('/');
}
module.exports = {
    getHomepage,
    getSample,
    postCreateUser,
    getCreateUser,
    getUpdateUser,
    postUpdateUser,
    postDeleteUser,
    postRemoveUser
}