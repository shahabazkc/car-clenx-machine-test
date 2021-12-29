const { orderSchema } = require("../../Models/orderModel");
let mongo = require('mongoose');
const { mongoose } = require('../../Config/mongo-connection');

const createOrder = (userId, address, products, totalAmount) => {
  return new Promise(async (resolve, reject) => {
    try {

      //order object model
      let orderObj = {
        userId: userId,
        orderedAddress: {
          name: address.name,
          number: address.number,
          state: address.state,
          city: address.city,
          street:address.street,
          pincode: address.pincode
        },
        paymentGateway: 'COD',
        products: products,
        totalAmount: totalAmount[0].total,
        orderStatus: true,
        orderDelivered: false,
        date: new Date()
      };

      const Orders = mongoose.model('orders', orderSchema);
      let order = new Orders(orderObj);

      //Saving to the Database
      order.save().then((res) => {

        let response = {
          status: true,
          orderPlaced: true
        };

        resolve(response);

      }).catch((err) => {
        reject(err);
      })

    }

    //Handling unexpected errors
    catch (err) {
      reject(err)
    }
  })
};

module.exports = createOrder;