const ProductModel = require("../../models/product.model");

const addProductController = async (req, res) => {
  const {
    productName,
    brand,
    category,
    color,
    sellingPrice,
    originalPrice,
    description,
  } = req.body;
  try {
    if (
      !productName ||
      !brand ||
      !category ||
      !color ||
      !sellingPrice ||
      !originalPrice ||
      !description
    ) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const product = new ProductModel(req.body);

    await product.save();

    res.status(201).json({
      success: true,
      message: "Product added successfully",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Failed to add product",
      error: error.message || error,
    });
  }
};

module.exports = addProductController;
