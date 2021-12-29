const createProductHandler = require("../../Controllers/product-management/create-product");

//Create Product
const createProduct = (req, res) => {
  createProductHandler(req.body).then((response) => {
    return res.status(201).json(response);
  }).catch((err) => {
    return res.status(501).json({ err: "Something went wrong" });
  })
}

module.exports = createProduct;