const mongoose = require('mongoose');

const mongoose_delete = require('mongoose-delete');
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
    {
        timestamps: true,
        // static: {
        //     findByDuong(name) {
        //         return this.find({ name: new RegExp(name, 'i') });
        //     }
        // }
    }
);
customerSchema.plugin(mongoose_delete, { overrideMethods: 'all' })

const Customer = mongoose.model('Customer', customerSchema);




module.exports = Customer;