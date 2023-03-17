export function RegisterButton({type="button", children, ...rest }) {
  return <button type={type} {...rest}>{children}</button>;
}