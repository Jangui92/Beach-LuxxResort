// import React, { useState, useEffect } from 'react'
// import PackagesCards from '../components/PackagesCards'
// import axios from 'axios'

// const packagesCard = () => {
//   const [packages, setPackages] = useState([])

//   const getPackages = async () => {
//     const res = await axios.get('http://localhost:3001/api/packages')
//     setPackages(res.data.reviews)
//   }
//   useEffect(() => {
//     getPackages()
//   }, [])

//   return (
//     <div>
//       <div>
//         <h2>Packages</h2>
//         <section>
//           hello
//           {packages.map((package) => (
//             <PackagesCards
//               id={review.id}
//               name={review.name}
//               title={review.title}
//               content={review.content}
//               popularityRating={review.popularityRating}
//             />
//           ))}
//         </section>
//       </div>
//     </div>
//   )
// }
// export default Packages
