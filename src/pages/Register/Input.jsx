export function Input({name, type, ...rest}){

  return(
    <input id={name} name={name} type={type} {...rest} />
  )
}
