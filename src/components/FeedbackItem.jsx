import Card from './shared/Card'
import PropTypes from 'prop-types'
/*from package react-icons, we want library-> font awesome(fa) library*/
/*from this library we want FaTimes meaning that cross symbol*/
import {FaTimes} from 'react-icons/fa'

function FeedbackItem({item, handleDelete}) 
{
    /*---These are component level States---*/
    //const [rating,setRating] = useState(7)
    //const [feedbackText,setFeedback] = useState('This is an example feedback')
    

  //   return (
  //   <div className="card">
  //       <div className="num-display">{item.rating}</div>
  //       <div className="text-display">{item.feedbackText}</div>
  //   </div>
  // )

  /*---Here actually deleteFeedback function is called---*/
  /*---this function handleDelete is an example of "props drill"---*/
    return(
      <Card reverse={false}>
        <div className="num-display">{item.rating}</div> 
        <button className='close' onClick={()=>handleDelete(item.id)}><FaTimes/></button>
        <div className="text-display">{item.feedbackText}</div>
      </Card>
    )
}
FeedbackItem.propTypes = {
  item : PropTypes.object.isRequired
}
export default FeedbackItem