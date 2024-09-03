const Cart = require("../../models/CartProduct");

const addToCartView = async (req, res) => {
    try{
        const currentUser = req.userId;
        const CartProduct = await Cart.find( { userId: currentUser }).populate("productId");
        res.status(200).json({
            message: 'Product added to cart successfully',
            data: CartProduct,
            success: true,
            error: false
            })

    }catch(err) {
        res.status(500).json({
            message: err.message,
            success: false,
            error: true
        })
    }
}
module.exports = addToCartView;