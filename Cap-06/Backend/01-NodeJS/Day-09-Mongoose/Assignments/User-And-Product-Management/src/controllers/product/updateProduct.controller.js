const ProductModel = require("../../models/product.model");

const updateProductController = async (req, res) => {
  const { id } = req.params;
  try {
    await ProductModel.findByIdAndUpdate({ _id: id }, req.body);
    res.status(200).json({
      success: true,
      message: "Product updated successfully",
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: "Failed to update product",
      error: error.message || error,
    });
  }
};

module.exports = updateProductController;
