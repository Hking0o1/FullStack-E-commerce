const Product = require("../../models/ProductModel");
const ObjectId = require('mongoose').Types.ObjectId;

const getProductDetails =async(req, res) =>{
    try{
        const productId = req.body;
        const product = await Product.findById(new ObjectId(productId.id));
        if(!product){
            return res.status(404).json({
                message: 'Product not found',
                success: false
            });
        }
        res.status(200).json({
            message: 'Product fetched successfully',
            success: true,
            data: product,
            error: false,
        })
    }catch(error) {
        res.status(500).json({
            message: error.message || error,
            success: false,
            error: true,
        });
    }
}

module.exports = getProductDetails;