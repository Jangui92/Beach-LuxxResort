const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()
// This line must come before importing any instrumented module.
const tracer = require('dd-trace').init()

router.get('/', (req, res) => res.send('This is home!'))

router.get('/reviews', controllers.getAllReviews)

router.post('/reviews', controllers.addReviews)

router.delete('/reviews/:id', controllers.deleteReview)

router.get('/packages', controllers.getAllPackages)

;(module.exports = router), tracer
