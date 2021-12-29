const express = require('express');
const router = express.Router();

//IMPORTING THE FILE HANDLERS
const { verifyToken } = require('../Controllers/authentication/jwtAuth');
const { registerHandler } = require('../Services/users/registerHandler');
const { loginHandler } = require('../Services/users/loginHandler');
const { addToCart } = require('../Services/cart/cart-add')
const { cartView } = require('../Services/cart/cart-view')
const createProduct = require('../Services/products/add-product');
const { getProducts } = require('../Services/products/get-products');
const { userCheck } = require('../Services/users/loginCheck');
const { removeProd } = require('../Services/cart/remove-product');
const { changeQty } = require('../Services/cart/quantity-change');
const cartCheckout = require('../Services/cart/cart-checkout');

/*                ROUTES                          */

//REGISTER ROUTER
router.post('/register', registerHandler);

//LOGIN ROUTER
router.post('/login', loginHandler);

//FETCHING THE PRODUCTS
router.get('/get-products', getProducts);

//CREATING THE PRODUCT
router.post('/create-product',createProduct);


//ADD TO CART ROUTE
router.post('/add-to-cart', verifyToken, addToCart);

//FETCHING USER CART
router.get('/get-cart', verifyToken, cartView);

//CHANGING CART PRODUCT QUANTITY ROUTE
router.post('/change-quantity', verifyToken, changeQty);

//REMOVE PRODUCT FROM CART ROUTE
router.put('/remove-product', verifyToken, removeProd)

//USER LOGINNED STATUS CHECK ROUTE
router.get('/user-check', userCheck);

//USER CHECKOUT
router.post('/checkout', verifyToken, cartCheckout);


//EXPORTING THE ROUTER
module.exports = router;