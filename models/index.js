const mongoose = require('mongoose')
const ReviewSchema = require('./reviews')
const PackagesSchema = require('./packages')

const Reviews = mongoose.model('reviews', ReviewSchema)
const Packages = mongoose.model('packages', PackagesSchema)

module.exports = {
  Reviews,
  Packages
}
