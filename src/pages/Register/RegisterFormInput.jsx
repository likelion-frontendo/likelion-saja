import {useId} from 'react'
import {Label, Input, Heading3} from "@/components";

export function RegisterFormInput({label, name, type, children, ...rest}){

  const uniqueId = useId()

  return(
    <div className="registerFormInput">
      <Heading3 className="registerHeading">
        <Label className="registerLabel" name={`${uniqueId}-${name}`}>{label}<sup>*</sup></Label>
      </Heading3>
      <Input className="registerInput" id={`${uniqueId}-${name}`} name={name} type={type} {...rest}/>
      {children}
    </div>
  )
}
