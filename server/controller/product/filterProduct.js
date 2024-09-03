const Product = require("../../models/ProductModel");

const filterProduct = async(req, res) =>{
    try{
        const categoryList = req.body.category;
        const product = await Product.find({
            category : {
                "$in" : categoryList
            }
        })
        res.status(200).json({
            data : product,
            success: true,
            message : "Product Filter",
            error: false
        })
    }catch(err){
        res.status(500).json({
            message: err.message || err,
            success: false,
            error: true
          });
    }
}

module.exports = filterProduct;