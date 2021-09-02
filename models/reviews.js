const { Schema } = require('mongoose')

const ReviewSchema = new Schema(
  {
    name: { type: String, required: true },
    title: { type: String },
    content: { type: String, required: true },
    popularityRating: { type: String, required: true }
  },
  { timestamps: true }
)
module.exports = ReviewSchema
