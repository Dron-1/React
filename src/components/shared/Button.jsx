import PropTypes from "prop-types"

function Button({children,type,version,isDisabled}) {
  return (
    <button type={type} className={`btn btn-${version}`} disabled = {isDisabled}>
        {children}
    </button>
  )
}

Button.defaultProps = {
    isDisabled : false,
    type:'submit',
    version: 'primary',
}

Button.propTypes = {
    children : PropTypes.node.isRequired,
    version : PropTypes.string,
    type : PropTypes.string,
    isDisabled : PropTypes.bool,
}
export default Button