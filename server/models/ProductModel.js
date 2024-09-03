const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    productName: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    brand: String,
    quantity: Number,
    description: {
        type: String,
        maxlength: 1000
    },
    price: {
        type: Number,
        required: true
    },
    selling: {
        type: Number,
        required: true
    },
    image: [
        {
            type: String,
            required: true
        }
    ]
},{
    timestamps: true});

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;