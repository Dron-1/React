//Created in Stage5

/*| Context is a better way to store and manage our global state(FeedbackItems) |*/
/*| Context provide a way to pass data through the component tree without |*/
/*| having to pass props down(props drill not required) manually at every level |*/

import {createContext,useState} from 'react'
import {v4 as uuidv4} from 'uuid'

const FeedbackContext = createContext();

export const FeedbackProvider = ({children}) => {
    //create a feedback object
    const [feedbacks,setFeedback] = useState([
        {
            id : '1',
            feedbackText : 'this is the feedback from the Context',
            rating: 10.0
        }
    ])
    //editFeedback a global state
    const [editFeedback,setEditFeedback] = useState({
        item : {},
        editFlag : false
    })

    //function to delete the feedback
    const deleteFeedback = (id)=>{
        console.log('App',id);
        if(window.confirm("Are you sure you want to delete it?")){
            setFeedback(feedbacks.filter((item)=> item.id !== id))        
        }
    }
    //function to add new feedabck
    const addFeedback = (feedback) => {
        const newFeedback = {
            id: uuidv4(),
            feedbackText : feedback.feedbackText,
            rating : feedback.rating
        }
        /*... = spread operator, fills the array with feedbacks' contents*/
        setFeedback([newFeedback,...feedbacks])
    }

    //function to get new editedfeedback and turning editFlag to true 
    const getNewFeedback = (item) => {
        setEditFeedback({
            item : item,
            editFlag : true
        })
    }
    
    const updateFeedback = (id,updatedItem) => {
        console.log(id,updatedItem)
       setFeedback(
        feedbacks.map((item) => (item.id === id ? {...item,...updatedItem} : item))
       )
       console.log(feedbacks)
       //again setting the editFlag to false once updation is done. 
       setEditFeedback({
        item : updatedItem,
        editFlag : false
       })
    }

    return (
    <FeedbackContext.Provider 
        value = {{
                feedbacks : feedbacks,
                editFeedback : editFeedback,
                deleteFeedback : deleteFeedback,
                addFeedback : addFeedback,
                getNewFeedback : getNewFeedback,
                updateFeedback : updateFeedback,    
                }} 
    >
            {children}
    </FeedbackContext.Provider>)
    // {/*| .Provider element(or component) provides access to the created Context(data/functions-> golbal state)   |*/}
    // {/*| it provides access to the elements inside the <.Provider></.Provider> element |*/}
    // {/*| the data which we want to give access of has to be specified in value attribute |*/}
}

export default FeedbackContext 