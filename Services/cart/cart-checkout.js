const { getTotal } = require('../../Controllers/cart-management/get-total');
const createOrder = require('../../Controllers/order-management/create-order');
const { getWithProductTotal } = require("../../Controllers/cart-management/product-with-total");

const cartCheckout = async (req, res) => {
  let { name, street, city, pincode, number, state } = req.body;
  let { userId } = req.jwt;
  let userAddress = {
    name, city, street, pincode, number, state
  };
  if (userId) {
    let totalAmount = await getTotal(userId);

    //getting the produccts from the cart
    let products = await getWithProductTotal(userId);
    //Checking the cart has products
    if (products.length > 0) {
      createOrder(userId, userAddress, products, totalAmount).then((response) => {
        res.status(201).json(response);
      }).catch((err) => {
        res.status(501).json({ err: "something went wrong" })
      })

    } else return res.status(201).json({ msg: "Cart is empty" })
  } else return res.status(201).json({ auth: false })
}

module.exports = cartCheckout;