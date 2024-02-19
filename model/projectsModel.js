const mongoose = require("mongoose");

const projectSchema = mongoose.Schema(
  {
    img: { type: String, required: true },
    video: { type: String },
    name: { type: String, required: true },
    skill: { type: String, required: true },
    description: { type: String, required: true },
    github: { type: String, required: true },
    demo: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("projects", projectSchema);
