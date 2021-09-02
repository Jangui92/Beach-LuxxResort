const db = require('../db')
const { Packages } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const packages = [
    { image: name: 'Water Bungalow', content: 'test', price: 'test' },
    { image: name: 'Water Bungalow', content: 'test', price: 'test' },
    { image: name: 'Water Bungalow', content: 'test', price: 'test' }
    { image: name: 'Water Bungalow', content: 'test', price: 'test' }
  ]

  await Packages.insertMany(packages)
  console.log('created package')
}

const run = async () => {
  await main()
  db.close()
}
run()
