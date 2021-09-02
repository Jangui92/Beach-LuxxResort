import React from 'react'
import axios from 'axios'

const SubmitReviewCards = ({ review }) => {
  const deleteReview = async () => {
    try {
      await axios.delete(`http://localhost:3001/api/reviews/${review._id}`)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="card">
      <div>
        <p>{review.title}</p>
        <p> {review.name}</p>
        <p> {review.content}</p>
        <p>{review.popularityRating}</p>
        <button onClick={deleteReview}>delete</button>
      </div>
    </div>
  )
}
export default SubmitReviewCards
