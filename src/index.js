//Entry point to react
//import react from 'react'  // react library
import reactDOM from 'react-dom' //used to interact with DOM,add our app to the browser
import App from './App'
import './index.css'

/*reactDOM.render(component,where to put this component) */
reactDOM.render(<App />,document.getElementById('root'))