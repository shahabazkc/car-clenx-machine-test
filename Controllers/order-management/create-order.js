const { orderSchema } = require("../../Models/orderModel");
let mongo = require('mongoose');
const { mongoose } = require('../../Config/mongo-connection');

const createOrder = (userId, address, products, totalAmount) => {
  return new Promise(async (resolve, reject) => {
    try {
      let orderObj = {
        userId: userId,
        orderedAddress: {
          name: address.name,
          number: address.number,
          state: address.state,
          city: address.city,
          pincode: address.pincode
        },
        paymentGateway: 'COD',
        products: products,
        totalAmount: totalAmount[0].total,
        orderStatus: true,
        orderDelivered: false,
        date: new Date()
      };
      console.log(orderObj);
      const Orders = mongoose.model('orders', orderSchema);
      let order = new Orders(orderObj);

      //Saving to the Database
      order.save().then((res) => {

        let response = {
          status: true,
          orderPlace: true
        };

        resolve(response);

      }).catch((err) => {
        reject(err);
      })

    }


    catch (err) {
      console.log(err)
      reject(err)
    }
  })
};

module.exports = createOrder;