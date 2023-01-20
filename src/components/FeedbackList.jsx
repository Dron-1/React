import FeedbackItem from "./FeedbackItem"
import {motion,AnimatePresence} from 'framer-motion'
import {useContext} from 'react'
import FeedbackContext from "../context/FeedbackContext"
import Spinner from "./shared/Spinner"

function FeedbackList() {
    const { feedbacks,isLoading } = useContext(FeedbackContext)

    /*| added condition-(!isLoading) in "if conditional and return " so that if isLoading is true then Spinner will be shown|*/
    if (!isLoading && (!feedbacks || feedbacks.length === 0 ))
    {
        return "No Feedbacks yet..."
    }
    return isLoading ? <Spinner /> : (
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
export default FeedbackList