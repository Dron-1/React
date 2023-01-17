import {useState, useContext} from 'react'
import Card from './shared/Card'
import Button from './shared/Button'
import RatingSelect from './RatingSelect'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackForm() {
  const [review,setReview] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [btnDisabled,setBtnDisabled] = useState(true)
  const [rating, setRating] = useState(10)
  
  const {addFeedback} = useContext(FeedbackContext)

  const handleChangeReview = (e) => {
    setReview(e.target.value);
    if(review === '' )
    {
      setErrorMessage(null)
      setBtnDisabled(true)
    }
    else if(review !== '' && review.trim().length <= 10 )
    {
      setErrorMessage('Your review must be more than 10 characters.')
      setBtnDisabled(true)
    }
    else
    {
      setErrorMessage(null)
      setBtnDisabled(false)
    }
  } 

  const handleSubmit = (e) => {
    e.preventDefault();
    if(review.trim().length >=10)
    {
      const newFeedback = {
        review : review,
        rating : rating,
      }
      console.log(newFeedback);
      addFeedback(newFeedback);
      setReview('')
    }
  }

  return (
    <Card reverse = {false}>
        <form onSubmit={handleSubmit}>
            <h2>How would you like to rate your service with us?</h2>
            <RatingSelect select = {(rating) => setRating(rating)}/>
            <div className="input-group">
                <input type="text" onChange = {handleChangeReview} placeholder='Write your review here..' value = {review}/>
                <Button type="submit" isDisabled = {btnDisabled}>Send</Button>
            </div>
            {/* This below line means if errorMessage is not empty then a div container will be created */}
            {errorMessage && <div className="message">{errorMessage}</div> }
        </form>
    </Card>
  )
}

export default FeedbackForm