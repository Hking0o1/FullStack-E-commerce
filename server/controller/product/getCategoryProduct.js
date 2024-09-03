const Product = require("../../models/ProductModel");

const getCategoryProduct = async (req, res) => {
  try {
    const category = req.body.category || req.query.category;
    const product = await Product.find({ category: category });
    if (product.length === 0) {
      console.log('No products found in category');
    }
    res.status(200).json({
      message: 'Product found successfully',
      success: true,
      data: product
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: error.message || error,
      success: false,
      error: true,
    });
  }
}

module.exports = getCategoryProduct;