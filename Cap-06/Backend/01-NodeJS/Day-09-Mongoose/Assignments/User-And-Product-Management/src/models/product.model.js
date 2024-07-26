const mongoose = require("mongoose");
const productSchema = require("../schemas/product.schema");

const ProductModel = mongoose.model("Product", productSchema);

module.exports = ProductModel;