const db = require('../db')
const { Packages } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const packages = [
    {
      image:
        'https://robbreport.com/wp-content/uploads/2019/09/intercontinental-maldives-outdoor-pool-deck-sunset-overwater-pool-villa.jpg',
      name: 'Water Bungalow',
      content: 'test',
      price: 'test'
    },
    {
      image:
        'http://www.linaratravel.com/wp-content/uploads/2019/12/maldives-velaa-private-island-romantic-pool-residence-01.jpg',
      name: 'Luxx Bungalow',
      content: 'test',
      price: 'test'
    },
    {
      image:
        'https://www.tripsavvy.com/thmb/kQkqaKa0n0Vc_wC8WUWenYTg9A0=/1530x1020/filters:no_upscale():max_bytes(150000):strip_icc()/BAROSMaldivesWaterPoolVilla-14a1b704bf4f435d865c079244dcc551.jpg',
      name: 'Exotic Bungalow',
      content: 'test',
      price: 'test'
    },
    {
      image:
        'https://d27k8xmh3cuzik.cloudfront.net/wp-content/uploads/2018/09/fbi-for-maldives-villa.jpg',
      name: 'Exotic Luxx Bungalow',
      content: 'test',
      price: 'test'
    }
  ]

  await Packages.insertMany(packages)
  console.log('created package')
}

const run = async () => {
  await main()
  db.close()
}
run()
