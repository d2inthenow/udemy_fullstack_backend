const connection = require('../config/database');

const { getAllUsers, getUserById, UpdateUserbyId, deleteUserById } = require('../services/CRUDservices');

const User = require("../model/user")

const getHomepage = async (req, res) => {
    let results = await User.find({});
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

    await User.create({
        email: email,
        name: name,
        city: city
    })
    return res.send("successed")

};
const getCreateUser = (req, res) => {
    res.render('create.ejs');
}

const getUpdateUser = async (req, res) => {
    const userId = req.params.Id;
    // let user = await getUserById(userId);
    let user = await User.findById(userId).exec();

    res.render('update.ejs', { userEdit: user });
}

const postUpdateUser = async (req, res) => {

    let email = req.body.email;
    let name = req.body.name;
    let city = req.body.city;
    let id = req.body.id;

    await User.updateOne({ _id: id }, { email: email, name: name, city: city });

    return res.redirect('/');

};
const postDeleteUser = async (req, res) => {
    const userId = req.params.Id;

    let user = await User.findById(userId).exec();

    // await User.delete({ _id: id }, { email: email, name: name, city: city });
    res.render('delete.ejs', { userEdit: user });
}
const postRemoveUser = async (req, res) => {
    const id = req.body.id;

    await User.deleteOne({
        _id: id
    });

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