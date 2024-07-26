const ProductModel = require("../../models/product.model");

const deleteProductController = async (req, res) => {
  const { id } = req.params;
  try {
    await ProductModel.findByIdAndDelete({ _id: id });
    res.status(200).json({
      success: true,
      message: "Product deleted successfully",
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: "Failed to delete product",
      error: error.message || error,
    });
  }
};

module.exports = deleteProductController;
