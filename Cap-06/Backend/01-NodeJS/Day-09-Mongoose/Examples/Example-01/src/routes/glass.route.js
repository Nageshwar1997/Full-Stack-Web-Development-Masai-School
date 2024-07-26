const express = require("express");
const GlassModel = require("../models/glass.model");
const glassRouter = express.Router();

glassRouter.post("/create-glass", async (req, res) => {
  const { color, material, size, brand } = req.body;

  try {
    const newGlass = new GlassModel({
      color,
      material,
      size,
      brand,
    });

    await newGlass.save();
    res.status(201).send("Glass created successfully");
  } catch (error) {
    res.status(404).send("Error creating glass", error);
  }
});

glassRouter.get("/get-glasses", async (req, res) => {
  try {
    const glasses = await GlassModel.find();
    // res.status(200).send(glasses);
    res.status(200).json({
      message: "Glasses fetched successfully",
      data: glasses,
    });
  } catch (error) {
    res.status(404).send("Error getting glasses", error);
  }
});

glassRouter.patch("/update-glass/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updatedGlass = await GlassModel.findByIdAndUpdate(
      { _id: id },
      req.body
    );

    res.status(200).json({
      message: "Glass updated successfully",
      data: updatedGlass,
    });
  } catch (error) {
    res.status(404).send("Error updating glass", error);
  }
});

glassRouter.delete("/delete-glass/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await GlassModel.findByIdAndDelete({ _id: id });

    res.status(200).json({
      message: "Glass deleted successfully",
    });
  } catch (error) {
    res.status(404).send("Error deleting glass", error);
  }
});

module.exports = glassRouter;
