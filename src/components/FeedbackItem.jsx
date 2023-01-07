/*---state (eg rating,feedbackText)is just data that is immutable ---*/
/*---we can instead RESET the state using a function---*/
/*useState is a hook, everything starting with use is hook */
import { useState } from "react"

function FeedbackItem() {
    const [rating,setRating] = useState(7) //default value of rating is 7
    const [feedbackText, setFeedback] = useState('This is an example Feedback.')

    const handleClick = ()=>{
        //rating  = 20 //we can not do this
        //setRating(20) //we can do this as well
        setRating((prev)=>{
            return prev + 1
        })
    }
  return (
    <div className="card">
        <div className="num-display">{rating}</div>
        <div className="text-display">{feedbackText}</div>
        <button onClick = {handleClick}>Click me!</button>
    </div>
  )
}

export default FeedbackItem
