import PropTypes from 'prop-types';

export function Input({name, type="text", ...rest}){

  return(
    <input id={name} name={name} type={type} {...rest} />
  )
}

Input.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
}