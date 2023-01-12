import FeedbackItem from "./FeedbackItem"
import PropTypes from 'prop-types'

function FeedbackList({feedbacks,handleDelete}) {
    if (!feedbacks || feedbacks.length === 0)
    {
    return "No Feedbacks yet..."
    }
    return (
    <div className="feedback-list">
        {feedbacks.map((item)=>(
            <FeedbackItem key = {item.id} item = {item} handleDelete = {handleDelete}/>
        ))}
    </div>
  )
}
FeedbackList.propTypes ={
    feedbacks: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            feedbackText : PropTypes.string.isRequired,
            rating : PropTypes.number.isRequired
        })
    )
}

export default FeedbackList