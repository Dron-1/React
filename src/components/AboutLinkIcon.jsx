/*---This is the new page added in Stage4---*/
import {FaQuestion} from 'react-icons/fa'
import {Link} from 'react-router-dom'

/*---We should nmot use anchor tag because it will refresh the page and then render contents---*/
/*---So we use Link component and its "to" prop as attribute from react-router-dom package---*/
function AboutLinkIcon() {
  return (
    <div className="about-link">
        <Link to={{
            pathname:"/about"
        }}>
            <FaQuestion size={30}/>
        </Link>
    </div>
  )
}

export default AboutLinkIcon