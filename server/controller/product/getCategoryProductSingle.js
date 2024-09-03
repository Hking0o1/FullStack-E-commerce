const Product = require('../../models/ProductModel');

const getCategoryProductSingle = async (req, res) => {
  try {
    // Fetch the list of distinct categories
    const productCategories = await Product.distinct('category');
    const productByCategory = [];

    // Iterate over each category and fetch the first product
    for (const category of productCategories) {
      const product = await Product.findOne({ category }).sort({ _id: 1 }); // Sort by _id to get the first inserted product
      if (product) {
        productByCategory.push(product);
      }
    }

    if (productByCategory.length === 0) {
      return res.status(404).json({
        message: 'No products found',
        success: false,
      });
    }

    res.status(200).json({
      message: 'Products fetched successfully',
      error: false,
      success: true,
      products: productByCategory,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message || error,
      success: false,
      error: true,
    });
  }
};

module.exports = getCategoryProductSingle;
