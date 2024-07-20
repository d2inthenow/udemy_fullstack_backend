const User = require("../model/user")

const { uploadSingleFile, uploadMultipleFile } = require('../services/fileServices')

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
const postUploadSingleFile = async (req, res) => {
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded.');
    };
    let results = await uploadSingleFile(req.files.image);
    res.send('FILE')
};
const postUploadMultipleFile = async (req, res) => {
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded.');
    };
    if (Array.isArray(req.files.image)) {
        let results = await uploadMultipleFile(req.files.image);
        console.log(">>>result: ", results)
        return res.status(200).json({
            EC: 0,
            data: results
        })
    } else {
        await uploadSingleFile(req, res);
    }



    res.send('FILE')
};



module.exports = {
    getUsersApi,
    postCreateUserAPI,
    putUpdateUserAPI,
    DeleteUserApi,
    postUploadSingleFile,
    postUploadMultipleFile,
}
