import PropTypes from 'prop-types';

export function Image({src, alt, ...rest}) {
  return <img src={src} alt={alt} {...rest} />
}

Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string
}