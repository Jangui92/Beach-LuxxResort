import React, { useState, useEffect } from 'react'
import axios from 'axios'
import PackageCards from '../components/PackageCards'

const Packages = () => {
  const [packages, setPackages] = useState([])

  const getAllPackages = async () => {
    const res = await axios.get('http://localhost:3001/api/packages')
    setPackages(res.data.rev)
  }

  useEffect(() => {
    getAllPackages()
  }, [])


  return (
    
        {packages.map((pack) => (
        <SubmitReviewCards packages={pack} /> 
        ))} 
        
  )
}
export default Packages
