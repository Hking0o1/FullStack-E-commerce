const UploadProductPermission = require('../../helpers/permission');
const ProductModel = require('../../models/ProductModel');

const updateProduct = async (req, res) => {
    try{
        //check if the user is authenticated and has the necessary permissions
        if (!UploadProductPermission(req.userId)) {
            throw new Error("You are not authorized to upload products");
          } 
        const {_id, ...resBody} = req.body;
        console.log(req.body)
        const product = await ProductModel.findByIdAndUpdate(_id, resBody, {new: true});
        console.log("New Product", product);
        res.status(200).json({
            message: "Product updated successfully",
            data: product,
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

module.exports = updateProduct;