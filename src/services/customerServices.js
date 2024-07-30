const Customer = require('../model/customer')

const CreateCustomerServices = async (Customerdata) => {
    try {
        await Customer.create({
            name: Customerdata.name,
            address: Customerdata.address,
            phone: Customerdata.phone,
            decription: Customerdata.decription,
            image: Customerdata.image
        })
    } catch (error) {
        console.log(">>>Check error : ", error)
    }
};

const CreateArrayCustomerServices = async (arr) => {
    try {
        let result = await Customer.insertMany(arr);

        return result;
    } catch (error) {
        console.log(">>Error : ", error)
        return null
    }
}
const getCustomerApiService = async (limit, page) => {
    try {
        let results = null;
        if (limit && page) {
            let offset = (page - 1) * limit;

            results = await Customer.find({}).skip(offset).limit(limit).exec();

        } else {
            results = await Customer.find({});
        }

        return results
    } catch (error) {
        console.log(">>>Error : ", error)
        return null
    }

}

const DeleteACustomerServices = async (id) => {
    try {
        let results = await Customer.deleteById({ _id: id });
        return results
    } catch (error) {
        console.log(">>>Error : ", error)
        return null
    }
}
const DeleteArrayCustomerServices = async (arrid) => {
    try {
        let results = await Customer.delete({ _id: { $in: arrid } });
        return results;
    } catch (error) {
        console.log(">>>Error : ", error)
        return null
    }
}
module.exports = {
    CreateCustomerServices,
    CreateArrayCustomerServices,
    getCustomerApiService,
    DeleteACustomerServices,
    DeleteArrayCustomerServices
}