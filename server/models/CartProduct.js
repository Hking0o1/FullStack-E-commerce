const mongoose = require('mongoose');

const CartSchema = new mongoose.Schema({
    productId : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
    },
    quantity : Number,
    totalPrice : Number,
    userId : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
    },{
    timestamps: true});
const Cart = mongoose.model('addToCart', CartSchema);

module.exports = Cart;