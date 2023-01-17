//Created in Stage5

/*| Context is a better way to store and manage our global state(FeedbackItems) |*/
/*| Context provide a way to pass data through the component tree without |*/
/*| having to pass props down(props drill not required) manually at every level |*/

import {createContext,useState} from 'react'
import {v4 as uuidv4} from 'uuid'

const FeedbackContext = createContext();

export const FeedbackProvider = ({children}) => {
    const [feedbacks,setFeedback] = useState([
        {
            id : '1',
            feedbackText : 'this is the feedback from the Context',
            rating: 10.0
        }
    ])

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

    return (
    <FeedbackContext.Provider 
        value = {{
                feedbacks : feedbacks,
                deleteFeedback : deleteFeedback,
                addFeedback : addFeedback,
                }} 
    >
            {children}
    </FeedbackContext.Provider>)
    // {/*| .Provider element(or component) provides access to the created Context(data)  |*/}
    // {/*| it provides access to the elements inside the <.Provider></.Provider> element |*/}
    // {/*| the data which we want to give access of has to be specified for value attribute |*/}
}

export default FeedbackContext 