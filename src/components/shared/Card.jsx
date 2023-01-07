/*This is a shared item used to implement card CSS as a component*/
import PropTypes from 'prop-types'
/*---"children" means body under <Card> tag---*/
/*---tags or Html body is of type node---*/
/*---we know `using backtic in JS is called TEMPLATE STRING`---*/
/*---we can write JS in `backtiks`---*/
/*---"${reverse && 'reverse'}" means ${reverse ? 'reverse' : null}*/
/*---We have a CSS attached to class = reverse in index.css---*/
function Card({children,reverse}) {
  /*---Applying reverse class to element using class conditional---*/
//   return (
//     <div className={`card ${reverse && 'reverse'}`} >{children}</div>
//   )

    /*---Applying reverse class to element using style conditional--- */
    return(
        <div className="card" style={{
            backgroundColor: reverse ? 'rgba(0,0,0,0.4)' : '#fff',
            color : reverse ? '#fff' : '#000'
        }}>{children}</div>
    )

}
Card.defaultProps = {
    reverse:true
}
Card.propTypes = {
    children : PropTypes.node.isRequired,
    reverse : PropTypes.bool
}
export default Card
