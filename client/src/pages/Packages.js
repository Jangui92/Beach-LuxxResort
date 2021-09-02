import React, { useState, useEffect } from 'react'
import PackageCards from '../components/PackageCards'
import axios from 'axios'

const Packages = () => {
  const [packages, setAllPackages] = useState([])

  const getAllPackages = async () => {
    const res = await axios.get('http://localhost:3001/api/packages')
    setAllPackages(res.data.pack)
  }

  useEffect(() => {
    getAllPackages()
    console.log(packages)
  }, [])

  return (
    <div>
      <section>
        <div className="package-container" />
        {packages.map((p) => (
          <PackageCards
            image={p.image}
            name={p.name}
            content={p.content}
            price={p.price}
          />
        ))}
      </section>
    </div>
  )
}
export default Packages
