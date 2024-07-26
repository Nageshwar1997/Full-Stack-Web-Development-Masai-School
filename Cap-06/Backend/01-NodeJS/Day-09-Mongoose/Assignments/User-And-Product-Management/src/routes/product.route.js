const express = require("express");
const productRouter = express.Router();

const addProductController = require("../controllers/product/addProduct.controller");
const getAllProductsController = require("../controllers/product/getAllProducts.controller");
const updateProductController = require("../controllers/product/updateProduct.controller");
const deleteProductController = require("../controllers/product/deleteProduct.controller");

productRouter.post("/add-product", addProductController);
productRouter.get("/get-all-products", getAllProductsController);
productRouter.patch("/update-product/:id", updateProductController);
productRouter.delete("/delete-product/:id", deleteProductController);

module.exports = productRouter;
