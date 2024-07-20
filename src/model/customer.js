const mongoose = require('mongoose');
//shape data

const customerSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        address: String,
        phone: String,
        email: String,
        image: String,
        decription: String
    },
    { timestamps: true }

);
const Customer = mongoose.model('Customer', customerSchema);



module.exports = Customer;