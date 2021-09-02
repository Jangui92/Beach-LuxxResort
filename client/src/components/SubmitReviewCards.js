import React, { useEffect } from 'react'
import axios from 'axios'

const SubmitReviewCards = ({ review }) => {
  const SubmitReviewCards = (props) => {
    const deleteReview = () =>
      await axios.delete(`http://localhost:3001/api/${review.id}`)
  }

  return (
    <div className="card">
      <div>
        <p>{review.title}</p>
        <p>{review.id}</p>
        <p> {review.name}</p>
        <p> {review.content}</p>
        <p>{review.popularityRating}</p>
        <button onClick={deleteReview}>delete</button>
      </div>
    </div>
  )
}
export default SubmitReviewCards
