import spinner from '../../assets/loading-icon.gif'

function Spinner() {
  return (
    <img src = {spinner} alt= "Loading..." style={{ display:'block',margin:'auto',width:"40px", height:"40px"}}/>
  )
}

export default Spinner