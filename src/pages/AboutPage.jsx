/*---This is the new page added in Stage4---*/
import Card from '../components/shared/Card'
import {Link} from 'react-router-dom'

function AboutPage() {
  return (
    <Card reverse = {false}>
        <div className="about">
            <h1>This is the About Page</h1>
            <p>This is a Feedback app to get the feedback from the users for a product or services.</p>
            <p>Version: 1.0.0</p>
            <Link to="/">Back to Home</Link>
        </div>
    </Card>
  )
}

export default AboutPage