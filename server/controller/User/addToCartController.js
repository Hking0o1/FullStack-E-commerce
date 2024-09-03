const Cart = require("../../models/CartProduct");

const addToCartController = async(req, res) =>{
    try{
        const { productId } = req.body;
        const currentUser = req.userId;
        if(!productId){
            return res.status(400).json({
                message: 'Please provide product id ',
                success: false,
                error: true
            })}
        const isProductAvailable = await Cart.findOne( { productId: productId, userId: currentUser });
        
        if(isProductAvailable){
            return res.status(400).json({
                message: 'Product already added to cart',
                success: false,
                error: true
            })
        }
        const payLoad = {
            userId: currentUser,
            productId: productId,
            quantity: 1
        }
        const newAddToCart = new Cart(payLoad);
        const saveProduct = await newAddToCart.save();
        res.status(200).json({
            message: 'Product added to cart successfully',
            data: saveProduct,
            success: true,
            error: false
        })
        

    }catch(err){
        res.status(500).json({
            message: err.message,
            success: false,
            error: true
        })
    }

}
module.exports = addToCartController;
