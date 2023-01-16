import FeedbackItem from "./FeedbackItem"
import PropTypes from 'prop-types'
import {motion,AnimatePresence} from 'framer-motion'

function FeedbackList({feedbacks,handleDelete}) {
    if (!feedbacks || feedbacks.length === 0)
    {
    return "No Feedbacks yet..."
    }
    return (
    <div className="feedback-list">
        <AnimatePresence>
            {feedbacks.map((item)=>(
                <motion.div 
                    key={item.id}
                    initial = {{opacity :0}}
                    animate = {{opacity : 1}}     
                    exit = {{opacity : 0}}
                >
                    <FeedbackItem key = {item.id} item = {item} handleDelete = {handleDelete}/>
                </motion.div>
            ))}
        </AnimatePresence>
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