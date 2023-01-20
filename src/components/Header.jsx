import PropTypes from 'prop-types'
/*---props is a object---*/
/*---props is called props---> 
/*---because it is used as property for the comoponent---> 
/*---Eg in App.js we can see <Header text="something"/> ---*/
/*---text is property of Header---*/
// function Header(props) {
//   return (
//     <>
//         <header>
//             <h1>{props.text}</h1>
//         </header>
//     </>
//   )
// }
function Header({ text ,bgColor, textColor})
{
  const headerStyle = {
    backgroundColor : bgColor,
    color : textColor
  }
  return(
    <>
      <header style = {headerStyle}>
        <h1>{text}</h1>
      </header>
    </>
  )
}
/*---To Give Default value of props---*/
Header.defaultProps = {
  text: 'Feedback APP',
  bgColor : 'rgba(0,0,0,0.4)',
  textColor : '#ff6a95'
}
/*--- To apply validations "to set the required data type for a prop" ---*/
Header.propTypes = {
  text: PropTypes.string,
  bgColor : PropTypes.string,
  textColor : PropTypes.string
}

export default Header