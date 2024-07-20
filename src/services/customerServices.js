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
module.exports = {
    CreateCustomerServices,
    CreateArrayCustomerServices
}