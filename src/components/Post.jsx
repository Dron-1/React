/*---| This Page added in Stage4 just to know about hook -> useParams |---*/
/*---| To redirect to another location we can use Navigate component |---*/
/*---| To redirect using a button click function - we use hook -> useNavigate() |---*/

import { useParams } from "react-router-dom"
import { Navigate,Routes,Route } from "react-router-dom"
import { useNavigate } from "react-router-dom"

function Post() {
  const params = useParams()
  const navigate = useNavigate()
  const status = 402

  const onClick = () => {
    console.log("Button is clicked")
    navigate('/post/show')
  }

  if(status === 404)
  { 
    return <Navigate to='/notfound' />
  }
  return (
    <div>
        <h1>Post</h1>
        {/* <h1>id : {params.status}</h1>
        <h1>name : {params.name}</h1> */}
        <button onClick={onClick} style={{width:"200px", height:"200px"}}>Click me</button>
        <Routes>
            {/* this show is inside post so path = ./path/show */}
            <Route path = "/show" element = {<h1>This is show</h1>} />
        </Routes>
    </div>
  )
}

export default Post