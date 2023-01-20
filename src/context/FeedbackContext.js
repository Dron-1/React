/*| Added package - concurrently, json-server|*/
/*| -------"server": "json-server --watch db.json --port 5000",---------added in package.json |*/
/*| json-server has fetch() which is used to fetch data from db.json |*/
/*| backend mock server created by json-server works on port 5000(I have set that in package.json) |*/
/*| ---------------------------------------------------------------------------------------------- |*/
/*| concurrently is used to concurrently run two commands in one terminal |*/
/*| -------"dev": "concurrently \"npm run server\" \"npm start\""--------added in package.json |*/
/*| ---------------------------------------------------------------------------------------------- |*/
/*| Context is a better way to store and manage our global state(FeedbackItems) |*/
/*| Context provide a way to pass data through the component tree without |*/
/*| having to pass props down(props drill not required) manually at every level |*/

import {createContext,useEffect,useState} from 'react'

const FeedbackContext = createContext();

export const FeedbackProvider = ({children}) => {
    const [ isLoading, setIsLoading ] = useState(true)
    //create a feedback object
    const [feedbacks,setFeedback] = useState([])

    useEffect(() => {
        fetchFeedback()
    },[])

    //fetch the feedbacks collection from backend
    const fetchFeedback = async () => {
        /*| I have set the proxy in package.json |*/
        /*| created a proxy : "http://localhost:5000" |*/
        /*| if no proxy created then-> fetch("http://localhost:5000"/feedbacks?_sort=id&_order=desc") |*/
        const response = await fetch("/feedbacks?_sort=id&_order=desc");
        const data = await response.json()
        console.log(data)
        setFeedback(data)
        setIsLoading(false) //setting loading to false so that loading gif will not shown
    }

    //editFeedback a global state
    const [editFeedback,setEditFeedback] = useState({
        item : {},
        editFlag : false
    })

    //function to delete the feedback
    const deleteFeedback = async (id)=>{
        if(window.confirm("Are you sure you want to delete it?")){
            await fetch(`/feedbacks/${id}`,{ method : "DELETE" });
            setFeedback(feedbacks.filter((item)=> item.id !== id))        
        }
    }
    //function to add new feedabck
    const addFeedback = async (newFeedback) => {
        const response = await fetch("/feedbacks",{
            method : "POST",
            headers : {
                "Content-Type" : "application/json",
            },
            body : JSON.stringify(newFeedback)
        })

        const data = await response.json()
        // setFeedback([newFeedback,...feedbacks])
        setFeedback([data,...feedbacks])
    }

    //function to get new editedfeedback and turning editFlag to true 
    const getNewFeedback = (item) => {
        setEditFeedback({
            item : item,
            editFlag : true
        })
    }
    
    const updateFeedback = async (id,updatedItem) => {
       const response = await fetch(`/feedbacks/${id}`,{
        method : "PUT",
        headers : {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify(updatedItem)
       })
       const data = await response.json()

       setFeedback(
        // feedbacks.map((item) => (item.id === id ? {...item,...updatedItem} : item))
        feedbacks.map((item) => (item.id === id ? {...item,...data} : item))
       )

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
                isLoading : isLoading,
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