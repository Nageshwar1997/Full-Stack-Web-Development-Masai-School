const mongoose = require("mongoose");

const glassSchema = require("../schemas/glass.schema");

// Model for Glass
const GlassModel = mongoose.model("Glass", glassSchema);

module.exports = GlassModel;
