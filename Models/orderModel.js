const { mongoose } = require('../Config/mongo-connection');

const orderSchema = new mongoose.Schema({
  userId: { type: String },
  products: { type: Array },
  date: { type: Date },
  orderedAddress: { type: Object },
  orderStatus: { type: String },
  totalAmount: { type: Number },
  paymentGatewat:{type:String},
  orderDelivered: { type: Boolean }
});

module.exports = { orderSchema };