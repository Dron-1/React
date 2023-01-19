/* |---------------Important now review is changed to feedbackText and setReview to setFeddbackText-----------| */
/*In Stage 5 added new hook, useEffect, added context to get the data*/
import {useState, useContext, useEffect} from 'react'
import Card from './shared/Card'
import Button from './shared/Button'
import RatingSelect from './RatingSelect'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackForm() {
  const [feedbackText,setFeedbackText] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [btnDisabled,setBtnDisabled] = useState(true)
  const [rating, setRating] = useState(10)
  
  /* getting functions addFeedback,updateFeedback and the object editFeedback from our context - FeedbackContext */
  const {addFeedback, editFeedback, updateFeedback} = useContext(FeedbackContext)
  
  /* | useEffect(callback,[array of dependencies]) |*/
  /* | useEffect() is called and callback function is executed every time when any element from |*/
  /* | dependency array is changed. Imp point- this hook is called atleast once when the page is loaded |*/
  /* | even if there is no dependencies |*/
  useEffect(() => {
    console.log("hello world",editFeedback);
    if(editFeedback.editFlag === true)
    {
      setBtnDisabled(false)
      setFeedbackText(editFeedback.item.feedbackText)
      setRating(editFeedback.item.rating)
    }
  },[editFeedback])

  const handleChangeReview = (e) => {
    setFeedbackText(e.target.value);
    if(feedbackText === '' )
    {
      setErrorMessage(null)
      setBtnDisabled(true)
    }
    else if(feedbackText !== '' && feedbackText.trim().length <= 10 )
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
    if(feedbackText.trim().length >=10)
    {
      const newFeedback = {
        feedbackText : feedbackText,
        rating : rating,
      }
      console.log(newFeedback);
      /* | if editFlag of editFeedback is true, it means the review is getting submitted after edit |*/
      /* | so we handle it separately in this case |*/
      if(editFeedback.editFlag === true)
      {
        console.log("I am called")
        updateFeedback(editFeedback.item.id,newFeedback)  
      }
      else{
        addFeedback(newFeedback);
      }

      setFeedbackText('')
    }
  }

  return (
    <Card reverse = {false}>
        <form onSubmit={handleSubmit}>
            <h2>How would you like to rate your service with us?</h2>
            <RatingSelect select = {(rating) => setRating(rating)}/>
            <div className="input-group">
                <input type="text" onChange = {handleChangeReview} placeholder='Write your review here..' value = {feedbackText}/>
                <Button type="submit" isDisabled = {btnDisabled}>Send</Button>
            </div>
            {/* This below line means if errorMessage is not empty then a div container will be created */}
            {errorMessage && <div className="message">{errorMessage}</div> }
        </form>
    </Card>
  )
}

export default FeedbackForm