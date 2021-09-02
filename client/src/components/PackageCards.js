import React from 'react'

const PackageCards = (props) => {
  return (
    <div className="package-card">
      <div>
        <img className="img" src={props.image} alt="image card" />
        <p>{props.name}</p>
        <p> {props.content}</p>
        <p> {props.price}</p>
      </div>
    </div>
  )
}
export default PackageCards
