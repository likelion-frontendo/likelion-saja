export function Input({name, type, ...rest}){

  return(
    <Input id={name} name={name} type={type} {...rest} />
  )
}
