export function Label({name, label, children, ...rest}) {
  
  return(
    <Label htmlFor={name}>{label}{children}</Label>
  )
}
