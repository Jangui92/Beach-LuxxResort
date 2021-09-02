import React, { useState, useEffect } from 'react'
import axios from 'axios'
import SubmitReviewCards from '../components/SubmitReviewCards'

const SubmitReviews = () => {
  const [reviews, setReviews] = useState([])

  const getAllReviews = async () => {
    const res = await axios.get('http://localhost:3001/api/reviews')
    setReviews(res.data.rev)
  }

  useEffect(() => {
    getAllReviews()
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    const parseForm = (e) => {
      return {
        name: e.target[1].value,
        title: e.target[3].value,
        contents: e.target[5].value,
        popularityRatings: e.target[7].value
      }
    }
    const parsedForm = parseForm(e)
    axios({
      method: 'post',
      url: 'http://localhost:3001/api/reviews',
      data: parsedForm,
      headers: { 'Content-Type': 'application/json' }
    })
      .then(function (response) {
        alert(`Thank you for your submission`)
        console.log(response)
      })
      .catch(function (response) {
        alert(`Submission unsuccessful.`)
        console.log(response)
      })
  }

  return (
    <div>
      <h1 className="submit-review">
        We would love your feedback on our luxury rooms.
      </h1>
      <h4>Fill out the Review form and click the submit button below.</h4>
      <form className="form-container" onSubmit={(e) => handleSubmit(e)}>
        <p>Name</p>
        <input name="name" type="text" />
        <p>Title</p>
        <input name="title" type="text" />
        <p>Review</p>
        <input name="content" type="text" />
        <p>Rating</p>
        <input name="popularityRating" type="Number" />
        <button type="submit">Submit</button>
      </form>
      {reviews.map((rev) => (
        <SubmitReviewCards review={rev} />
      ))}
    </div>
  )
}

export default SubmitReviews
