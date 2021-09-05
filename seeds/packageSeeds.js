const db = require('../db')
const { Packages } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const packages = [
    {
      image:
        'https://robbreport.com/wp-content/uploads/2019/09/intercontinental-maldives-outdoor-pool-deck-sunset-overwater-pool-villa.jpg',
      name: 'Water Bungalow',
      content:
        'Ever dream of living on the ocean? Experience our beautiful Water Bungalow with breath-taking sunsets.',
      price: '$199/night'
    },
    {
      image:
        'http://www.linaratravel.com/wp-content/uploads/2019/12/maldives-velaa-private-island-romantic-pool-residence-01.jpg',
      name: 'Luxx Bungalow',
      content:
        'Experince a tough of luxury with our Luxx Bungalow, includes top tier service and private balcony.',
      price: '$299/night'
    },
    {
      image:
        'https://www.tripsavvy.com/thmb/kQkqaKa0n0Vc_wC8WUWenYTg9A0=/1530x1020/filters:no_upscale():max_bytes(150000):strip_icc()/BAROSMaldivesWaterPoolVilla-14a1b704bf4f435d865c079244dcc551.jpg',
      name: 'Exotic Bungalow',
      content:
        'Our Exotic Bungalow is hot this season with special request options along with bottle service and unlimited buffet passes.',
      price: '$399/night'
    },
    {
      image:
        'https://d27k8xmh3cuzik.cloudfront.net/wp-content/uploads/2018/09/fbi-for-maldives-villa.jpg',
      name: 'Exotic Luxx Bungalow',
      content:
        'A splendid combonation of our Luxury Bungalow with an Exotic twist all special amednities included.',
      price: '$499/night'
    },
    {
      image:
        'https://robbreport.com/wp-content/uploads/2019/09/intercontinental-maldives-outdoor-pool-deck-sunset-overwater-pool-villa.jpg',
      name: 'Water Bungalow',
      content:
        'Ever dream of living on the ocean? Experience our beautiful Water Bungalow with breath-taking sunsets.',
      price: '$199/night'
    },
    {
      image:
        'http://www.linaratravel.com/wp-content/uploads/2019/12/maldives-velaa-private-island-romantic-pool-residence-01.jpg',
      name: 'Luxx Bungalow',
      content:
        'Experince a tough of luxury with our Luxx Bungalow, includes top tier service and private balcony.',
      price: '$299/night'
    },
    {
      image:
        'https://www.tripsavvy.com/thmb/kQkqaKa0n0Vc_wC8WUWenYTg9A0=/1530x1020/filters:no_upscale():max_bytes(150000):strip_icc()/BAROSMaldivesWaterPoolVilla-14a1b704bf4f435d865c079244dcc551.jpg',
      name: 'Exotic Bungalow',
      content:
        'Our Exotic Bungalow is hot this season with special request options along with bottle service and unlimited buffet passes.',
      price: '$399/night'
    },
    {
      image:
        'https://d27k8xmh3cuzik.cloudfront.net/wp-content/uploads/2018/09/fbi-for-maldives-villa.jpg',
      name: 'Exotic Luxx Bungalow',
      content:
        'A splendid combonation of our Luxury Bungalow with an Exotic twist all special amednities included.',
      price: '$499/night'
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
