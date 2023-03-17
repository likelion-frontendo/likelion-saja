import { useId } from 'react'

export function RegisterFormInput({label, name, type, children, ...rest}){

  const uniqueId = useId()

  return(
    <div>
      <label htmlFor={`${uniqueId}-${name}`}>{label}</label>
      <input id={`${uniqueId}-${name}`} name={name} type={type} {...rest}/>
      {children}
    </div>
  )
}