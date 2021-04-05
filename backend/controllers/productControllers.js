const Product = require("../models/productModel");
const asyncHandler = require("express-async-handler");

// @desc       Find all products
// @route      GET api/products
// @access     public

const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});

// @desc       Find single products
// @route      GET api/products/:id
// @access     public

const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error("Product Not Found");
  }
});

module.exports = { getProducts, getProductById };
