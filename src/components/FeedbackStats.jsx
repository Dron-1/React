
function FeedbackStats({feedbackList}) 
{
  let average = feedbackList.reduce((acc,curr)=>{
    acc = acc + curr.rating
    return acc
  },0)  / feedbackList.length;

  average = average.toFixed(1).replace(/.0/,"");
  console.log(average)
  return (
    <div className="feedback-stats">
        <h4>{feedbackList.length} reviews</h4>
        <h4>Average review : {isNaN(average) ? 0 : average }</h4>
    </div>
  )
}

export default FeedbackStats