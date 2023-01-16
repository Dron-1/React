//Stage 3
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import { useState } from "react";
import FeedbackData from "./data/FeedbackData" 
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import {v4 as uuidv4} from 'uuid'

function App()
{   
    /*---This is App level state---*/
    const [feedbacks,setFeedback] = useState(FeedbackData)
    const deleteFeedback = (id)=>{
        console.log('App',id);
        if(window.confirm("Are you sure you want to delete it?")){
            setFeedback(feedbacks.filter((item)=> item.id !== id))        
        }
    }
    const addFeedback = (feedback) => {
        const newFeedback = {
            id: uuidv4(),
            feedbackText : feedback.review,
            rating : feedback.rating
        }
        /*... = spread operator, fills the array with feedbacks' contents*/
        setFeedback([newFeedback,...feedbacks])
    }
    return(
        <>
            <Header />
            <div className="container">
                <FeedbackForm handleInsert = {addFeedback}/>
                <FeedbackStats feedbackList = {feedbacks} />
                <FeedbackList feedbacks = {feedbacks} handleDelete={deleteFeedback}/>
            </div>
        </>
    )
}

export default App; 