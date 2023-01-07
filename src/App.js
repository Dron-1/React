import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import { useState } from "react";
import FeedbackData from "./data/FeedbackData" 
import FeedbackStats from './components/FeedbackStats'


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
    return(
        <>
            <Header />
            <FeedbackStats feedbackList = {feedbacks} />
            <div className="container">
            <FeedbackList feedbacks = {feedbacks} handleDelete={deleteFeedback}/>
            </div>
        </>
    )
}

export default App; 
