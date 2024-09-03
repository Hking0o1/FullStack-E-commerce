const UploadProductPermission = require('../../helpers/permission');
const Product = require('../../models/ProductModel');

const UploadProductController = async (req, res) => {
  try {
    if (!UploadProductPermission(req.userId)) {
      throw new Error("You are not authorized to upload products");
    } 
    const product = new Product(req.body);
    const savedProduct = await product.save();
    console.log("saved Product",savedProduct);
    res.status(201).json({
      message: "Product uploaded successfully",
      data: savedProduct,
      success: true,
      error: false
    });
  } catch (err) {
    res.status(403).json({
      message: err.message || "You are not authorized to upload products",
      error: true,
      success: false
    });
  }
};

module.exports = UploadProductController;