import React from 'react'
import { Card } from 'react-bootstrap'

const PackageCards = (props) => {
  console.log(props)
  return (
    <div className="package-card">
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={props.image} alt="card" />
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <Card.Text>{props.content}</Card.Text>
          <Card.Text>{props.price}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}
export default PackageCards
