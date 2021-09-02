import React from 'react'

return (
  <div className="package-card">
    <div>
      <p>{Packages.name}</p>
      <p> {Packages.content}</p>
      <p> {Packages.price}</p>
      <p>{review.popularityRating}</p>
    </div>
  </div>
)

export default PackageCards
