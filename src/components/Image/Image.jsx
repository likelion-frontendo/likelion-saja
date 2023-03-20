export function Image({src, alt, ...rest}) {
  return <img src={src} alt={alt} {...rest} />
}