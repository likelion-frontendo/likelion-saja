export function Label({name, label, children, ...rest}) {
  
  return(
    <label htmlFor={name} {...rest}>{label}{children}</label>
  )
}