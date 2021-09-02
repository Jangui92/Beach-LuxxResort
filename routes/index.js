const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()

router.get('/', (req, res) => res.send('This is home!'))

router.get('/reviews', controllers.getAllReviews)

router.post('/reviews', controllers.addReviews)

router.delete('/reviews/:id', controllers.deleteReview)

module.exports = router
