import Card from './shared/Card'
import PropTypes from 'prop-types'
import {FaTimes} from 'react-icons/fa'
import FeedbackContext from '../context/FeedbackContext'
import {useContext} from 'react'

function FeedbackItem({item}) 
{
    const {deleteFeedback} = useContext(FeedbackContext)
    return(
      <Card reverse={false}>
        <div className="num-display">{item.rating}</div> 
        <button className='close' onClick={()=>deleteFeedback(item.id)}><FaTimes/></button>
        <div className="text-display">{item.feedbackText}</div>
      </Card>
    )
}
FeedbackItem.propTypes = {
  item : PropTypes.object.isRequired
}
export default FeedbackItem