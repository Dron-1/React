//Stage 4
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import { useState } from "react";
import FeedbackData from "./data/FeedbackData" 
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import {v4 as uuidv4} from 'uuid'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import AboutPage from "./pages/AboutPage";
import AboutLinkIcon from "./components/AboutLinkIcon";
import Post from "./components/Post";

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
        <Router>
            <Header />
            <div className="container">
                <Routes>
                    <Route exact path="/" element = {
                        <>
                            <FeedbackForm handleInsert = {addFeedback}/>
                            <FeedbackStats feedbackList = {feedbacks} />
                            <FeedbackList feedbacks = {feedbacks} handleDelete={deleteFeedback}/>
                        </>
                    } />
                    
                    <Route path="/about" element={<AboutPage />} />
                    {/* localhost:3000/200/dron (Imp-all params must be there in link)*/}
                    {/* <Route path="/post/:status/:name" element={<Post />} /> */}
                    {/* localhost:3000/200/show ->  */}
                    {/* asterisk * after param status means nested link or routing is applicable */}
                    <Route path="/post/:status/*" element={<Post />} />
                </Routes>
                <AboutLinkIcon />
            </div>
        </Router>
    )
}

export default App; 