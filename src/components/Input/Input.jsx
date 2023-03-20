export function Input({name, type="text", ...rest}){

  return(
    <input id={name} name={name} type={type} {...rest} />
  )
}
