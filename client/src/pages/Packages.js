import React, { useState, useEffect } from 'react'
import PackageCards from '../components/PackageCards'
import axios from 'axios'

const Packages = () => {
  const [packages, setAllPackages] = useState([])

  const getAllPackages = async () => {
    const res = await axios.get('http://localhost:3001/api/packages')
    setAllPackages(res.data.packages)
  }

  useEffect(() => {
    getAllPackages()
  }, [])

  return (
    <div>
      <div className="package-container" />
      {packages.map((package) => (
        <PackageCards
          image={package.image}
          name={package.name}
          content={package.content}
          price={package.price}
        />
      ))}
    </div>
  )
}
export default Packages
