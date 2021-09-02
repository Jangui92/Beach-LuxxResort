// import React, { useState, useEffect } from 'react'
// import axios from 'axios'
// import PackageCards from '../components/PackageCards'

// const Packages = () => {
//   const [packages, setPackages] = useState([])

//   const getAllPackages = async () => {
//     const res = await axios.get('http://localhost:3001/api/packages')
//     setPackages(res.data.packages)
//   }

//   useEffect(() => {
//     getAllPackages()
//   }, [])

//   return (

//         {packages.map((package) => (
//         <PackageCards packages={package} />
//     ))}

//   )
// }
// export default Packages
