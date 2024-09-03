const Cart = require("../../models/CartProduct");

const countAddToCartProduct = async(req, res) =>{
    try{
        const userId = req.userId;
        const count = await Cart.countDocuments({userId: userId});

        if (count === 0) {
            res.status(404).json({
                message: 'No products found in cart',
                error: true,
                success: false
            })
        } else {
            res.status(200).json({
                message: 'Count of products in cart fetched successfully',
                success: true,
                data: {
                    count: count
                },
                error: false
            })
        }
    }catch(err){
        res.status(500).json({
            message: err.message,
            error: true,
            success: false
        })
    }
}

module.exports = countAddToCartProduct;