import FeedbackItem from "./FeedbackItem"
//import PropTypes from 'prop-types'
import {motion,AnimatePresence} from 'framer-motion'
import {useContext} from 'react'
import FeedbackContext from "../context/FeedbackContext"

function FeedbackList() {
    const { feedbacks } = useContext(FeedbackContext)

    if (!feedbacks || feedbacks.length === 0)
    {
    return "No Feedbacks yet..."
    }
    return (
    <div className="feedback-list">
        <AnimatePresence>
            {feedbacks.map((item)=>(
                <motion.div 
                    key = {item.id}
                    initial = {{opacity : 0}}
                    animate = {{opacity : 1}}
                    exit = {{opacity : 0}}    
                >
                    <FeedbackItem key = {item.id} item = {item} />
                </motion.div>
            ))}
        </AnimatePresence>
    </div>
  )
}
/* because of Context we need not specify propTypes */

/* FeedbackList.propTypes ={
    feedbacks: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            feedbackText : PropTypes.string.isRequired,
            rating : PropTypes.number.isRequired
        })
    )
} */

export default FeedbackList