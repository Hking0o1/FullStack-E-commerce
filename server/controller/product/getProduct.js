const Product = require("../../models/ProductModel");


const getProductController= async (req, res) => {
    try{
        const allProduct = await Product.find().sort({createdAt : -1});
        if(!allProduct){
            return res.status(404).json({
                message: 'Product not found',
                success: false
            });
        }
        res.json({
            message: 'All products fetched successfully',
            data: allProduct,
            success: true,
            error: false
        });
    }catch(err){
        res.status(403).json({
          message: err.message || "You are not authorized to upload products",
          error: true,
          success: false
        });
      }
    
}

module.exports = getProductController;