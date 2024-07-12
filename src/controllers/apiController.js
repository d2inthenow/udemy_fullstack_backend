const User = require("../model/user")

const getUsersApi = async (req, res) => {

    let results = await User.find({});
    return res.status(200).json({
        ErrorCode: 0,
        Data: results
    });
}

module.exports = {
    getUsersApi
}
