const express = require('express');
const router = express.Router();
const userRegister = require('../controller/User/userSignin');
const userLoginController = require('../controller/User/userLogin');
const authToken = require('../middleware/authtoken');
const userDetails = require('../controller/User/userDetails');
const userLogout = require('../controller/User/userLogout');
const allUsers = require('../controller/User/allUsers');
const updateUser = require('../controller/User/updateUser');
const UploadProductController = require('../controller/product/uploadProduct');
const getProductController = require('../controller/product/getProduct');
const updateProduct = require('../controller/product/updateProduct');
const getCategoryProductSingle = require('../controller/product/getCategoryProductSingle');
const getCategoryProduct = require('../controller/product/getCategoryProduct');
const getProductDetails = require('../controller/product/getProductDetails');
const addToCartController = require('../controller/User/addToCartController');
const countAddToCartProduct = require('../controller/User/countAddToCardProduct');
const  addToCartView = require('../controller/User/addToCartView');
const updateAddTOCartProduct = require('../controller/User/updateAddToCartProduct');
const deleteAddToCartProduct = require('../controller/User/deleteAddToCartProduct');
const searchProduct = require('../controller/product/searchProduct');
const filterProduct = require('../controller/product/filterProduct');
const paymentController = require('../controller/order/paymentController');


router.post('/Register', userRegister);
router.post('/login', userLoginController);
router.get("/user-Details", authToken, userDetails);
router.get("/userLogout", userLogout);
router.get('/all-users', authToken, allUsers);
router.post('/update-user',authToken, updateUser);
router.post('/upload-product',authToken,UploadProductController);
router.get('/get-products', getProductController);
router.post('/update-product', authToken, updateProduct);
router.get('/get-product-category', getCategoryProductSingle);
router.post('/category-product', getCategoryProduct);
router.post('/product-details', getProductDetails);
router.post('/addToCart',authToken, addToCartController);
router.get('/countAddToCartProduct',authToken, countAddToCartProduct);
router.get('/cartProductView',authToken, addToCartView);
router.post('/update-Cart-Product', updateAddTOCartProduct)
router.post('/delete-cart-product', deleteAddToCartProduct)
router.get('/search', searchProduct)
router.post("/filter-product", filterProduct)
router.post('/checkout',authToken, paymentController)

module.exports = router