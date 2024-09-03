const Cart = require('../../models/CartProduct');

const deleteAddToCartProduct = async (req, res) => {
  try {
    const currentUserId = req.body.userId
    const addToCartId = req.body.id;
    const cart = await Cart.findOneAndDelete({ _id : addToCartId }, currentUserId);
    res.json({
      message: 'Product deleted from cart successfully',
      error: false,
      success: true,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message || 'Server Error',
      success: false,
      error: true,
    });
  }
};

module.exports = deleteAddToCartProduct;