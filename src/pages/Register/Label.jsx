export function Label({name, label, children, ...rest}) {
  
  return(
    <label htmlFor={name}>{label}{children}</label>
  )
}