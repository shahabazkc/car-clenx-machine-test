const { productSchema } = require('../../Models/productModel');
const { mongoose } = require('../../Config/mongo-connection');

const createProductHandler = (data) => {
  return new Promise(async (resolve, reject) => {

    try {
      const Product = mongoose.model('product', productSchema);
      let product = new Product(data);

      //Saving to the Database
      product.save().then((res) => {

        let response = {
          status: true,
          createdProduct: true
        };

        resolve(response);

      }).catch((err) => {
        reject(err);
      });
    }
    catch (err) {
      reject(err);
    }
  })
}

module.exports = createProductHandler;