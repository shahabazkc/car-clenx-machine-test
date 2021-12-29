const { orderSchema } = require("../../Models/orderModel");

const createOrder = (userId, address,products, totalAmount) => {
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
        totalAmount: totalAmount,
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
          orderPlace: true
        };

        resolve(response);

      }).catch((err) => {
        reject(err);
      })

    }


    catch (err) {
      reject(err)
    }
  })
};

module.exports = createOrder;