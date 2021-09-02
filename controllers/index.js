const { Reviews, Packages } = require('../models')

const getAllReviews = async (req, res) => {
  try {
    const rev = await Reviews.find()
    console.log(rev)
    return res.status(200).json({ rev })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const deleteReview = async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await Reviews.findByIdAndDelete(id)
    if (deleted) {
      return res.status(201).json('Review Deleted')
    }
    throw new Error('Review not found')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const addReviews = async (req, res) => {
  try {
    const rev = await new Reviews(req.body)
    await rev.save()
    return res.status(201).json({ rev })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getAllPackages = async (req, res) => {
  try {
    const pack = await Packages.find()
    console.log(pack)
    return res.status(200).json({ pack })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  getAllReviews,
  addReviews,
  deleteReview,
  getAllPackages
}
