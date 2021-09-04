import React, { useState, useEffect } from 'react'
import PackageCards from '../components/PackageCards'
import axios from 'axios'
import { BASE_URL } from '../globals'

const Packages = () => {
  const [packages, setAllPackages] = useState([])

  const getAllPackages = async () => {
    const res = await axios.get(`${BASE_URL}/packages`)
    setAllPackages(res.data.pack)
  }

  useEffect(() => {
    getAllPackages()
    console.log(packages)
  }, [])

  return (
    <div>
      <section className="package-container">
        <div />

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
