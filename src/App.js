import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm';
import { FeedbackProvider } from "./context/FeedbackContext";
import AboutIcon from "./components/AboutIcon";
import AboutPage from "./pages/AboutPage";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App()
{   
    return(
        <FeedbackProvider>
            <Router>
                <Header />
                <Routes>
                    <Route exact path="/" element = 
                    {   <>
                        <div className="container">
                        
                            <FeedbackForm />
                            <FeedbackStats />
                            <FeedbackList />
                        </div>
                        <AboutIcon /> 
                        </>
                    }
                    >
                    </Route>
                    <Route path="/about" element = {<AboutPage />}/>
                </Routes>   
            </Router>
        </FeedbackProvider>
    )
}

export default App; 