const { Schema } = require('mongoose')

const Packages = new Schema(
  {
    name: { type: String, required: true },
    content: { type: String, required: true },
    price: { type: String, required: true }
  },
  { timestamps: true }
)
module.exports = Packages
