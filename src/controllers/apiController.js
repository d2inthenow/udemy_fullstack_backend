const User = require("../model/user")

const getUsersApi = async (req, res) => {

    let results = await User.find({});
    return res.status(200).json({
        ErrorCode: 0,
        Data: results
    });
}

const postCreateUserAPI = async (req, res) => {

    let email = req.body.email;
    let name = req.body.name;
    let city = req.body.city;

    let user = await User.create({
        email: email,
        name: name,
        city: city
    })
    return res.status(200).json({
        ErrorCode: 0,
        Data: user
    });

};
const putUpdateUserAPI = async (req, res) => {

    let email = req.body.email;
    let name = req.body.name;
    let city = req.body.city;
    let id = req.body.id;

    let user = await User.updateOne({ _id: id }, { email: email, name: name, city: city });

    return res.status(200).json({
        ErrorCode: 0,
        Data: user
    });
}

const DeleteUserApi = async (req, res) => {
    const id = req.body.id;

    let results = await User.deleteOne({
        _id: id
    });

    return res.status(200).json({
        ErrorCode: 0,
        Data: results
    });
}
module.exports = {
    getUsersApi,
    postCreateUserAPI,
    putUpdateUserAPI,
    DeleteUserApi
}
