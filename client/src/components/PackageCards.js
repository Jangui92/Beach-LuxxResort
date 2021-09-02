import React from 'react'

const PackageCards = (props) => {
  console.log(props)
  return (
    <div className="package-card">
      <div>
        <img src={props.image} alt="card" />
        <p>{props.name}</p>
        <p> {props.content}</p>
        <p> {props.price}</p>
      </div>
    </div>
  )
}
export default PackageCards
