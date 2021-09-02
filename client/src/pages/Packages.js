import React, { useState, useEffect } from 'react'
import PackagesCards from '../components/PackagesCards'
import axios from 'axios'

const packagesCard = () => {
  const [packages, setPackages] = useState([])

  const getPackages = async () => {
    const res = await axios.get('http://localhost:3001/api/packages')
    setPackages(res.data.reviews)
  }
  useEffect(() => {
    getPackages()
  }, [])

  return (
    <div>
      <div>
        <h2>Packages</h2>
        <section>hello</section>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}
export default Packages
