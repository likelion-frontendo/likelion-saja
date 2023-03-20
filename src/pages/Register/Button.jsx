export function Button({type="button", children, ...rest }) {
  return <button type={type} {...rest}>{children}</button>;
}