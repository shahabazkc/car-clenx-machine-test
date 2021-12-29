const { mongoose } = require('../Config/mongo-connection');

const orderSchema = new mongoose.Schema({
  userId: { type: String },
  products: { type: Array },
  date: { type: Date },
  orderAddress: { type: Object },
  orderStatus: { type: String },
  totalAmount: { type: Number },
  orderDelivered: { type: Boolean }
});

module.exports = { orderSchema };