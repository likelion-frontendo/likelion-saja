import PropTypes from 'prop-types';

export function Label({name, label, children, ...rest}) {
  
  return(
    <label htmlFor={name} {...rest}>{label}{children}</label>
  )
}

Label.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
}