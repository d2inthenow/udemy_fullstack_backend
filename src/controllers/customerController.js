const { uploadSingleFile, uploadMultipleFile } = require('../services/fileServices')

const { CreateCustomerServices, CreateArrayCustomerServices, getCustomerApiService, DeleteACustomerServices, DeleteArrayCustomerServices } = require('../services/customerServices')

const postCreateCustomer = async (req, res) => {

    let { name, address, phone, email, decription } = req.body;
    let imageUrl = "";

    if (!req.files || Object.keys(req.files).length === 0) {

    }
    else {
        let results = await uploadSingleFile(req.files.image);
        imageUrl = results.path;

    }
    let Customerdata = {
        name,
        address,
        phone,
        email,
        decription,
        image: imageUrl

    }

    let customer = await CreateCustomerServices(Customerdata);

    return res.status(200).json({
        EC: 0,
        data: customer
    })
};
const postCreateArrayCustomer = async (req, res) => {
    let customers = await CreateArrayCustomerServices(req.body.customer);
    if (customers) {
        return res.status(200).json({
            EC: 0,
            data: customers
        })
    } else {
        return res.status(400).json({
            EC: -1,
            data: customers
        })
    }

}

const getAllCustomer = async (req, res) => {
    let limit = req.query.limit;
    let page = req.query.page;
    let result = null;

    if (limit && page) {
        result = await getCustomerApiService(limit, page);
    } else {
        result = await getCustomerApiService();
    }
    return res.status(200).json({
        EC: 0,
        data: result
    })
}
const DeleteACustomer = async (req, res) => {
    let id = req.body.customersId;

    let results = await DeleteACustomerServices(id);
    return res.status(200).json({
        EC: 0,
        data: results
    });
}
const DeleteArrayCustomer = async (req, res) => {
    let ids = req.body.ids;

    let results = await DeleteArrayCustomerServices(ids);
    return res.status(200).json({
        EC: 0,
        data: results
    });
}
module.exports = {
    postCreateCustomer,
    postCreateArrayCustomer,
    getAllCustomer,
    DeleteACustomer,
    DeleteArrayCustomer

}