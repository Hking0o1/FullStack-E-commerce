const Cart = require("../../models/CartProduct");

const updateAddTOCartProduct = async (req, res) => {
  try {
    if (!req.body || !req.body.id) {
      return res.status(400).json({
        message: "Missing required fields in request body",
        success: false,
        error: true
      });
    }

    const addToCartId = req.body.id;
    const quantity = req.body.quantity;

    const cartProduct = await Cart.findByIdAndUpdate(addToCartId, {
      quantity: quantity
    });

    if (!cartProduct) {
      return res.status(404).json({
        message: "Cart product not found",
        success: false,
        error: true
      });
    }

    res.status(200).json({
      message: 'Product quantity updated successfully',
      success: true,
      data: cartProduct
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
      success: false,
      error: true
    });
  }
};

module.exports = updateAddTOCartProduct;