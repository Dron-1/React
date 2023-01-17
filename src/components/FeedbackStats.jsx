import FeedbackContext from "../context/FeedbackContext";
import {useContext} from 'react'

function FeedbackStats() 
{
  const {feedbacks} = useContext(FeedbackContext)
  
  let average = feedbacks.reduce((acc,curr)=>{
    acc = acc + curr.rating
    return acc
  },0)  / feedbacks.length;

  average = average.toFixed(1).replace(/[.]0$/,""); //if there is point->[.] and ends with 0 ->0$,replace with "empty string"
  console.log(average)
  return (
    <div className="feedback-stats">
        <h4>{feedbacks.length} reviews</h4>
        <h4>Average review : {isNaN(average) ? 0 : average }</h4>
    </div>
  )
}

export default FeedbackStats