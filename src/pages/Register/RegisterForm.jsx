export function RegisterForm({action="/", method="post", legend, children, ...rest}) {
  return <form action={action} method={method} {...rest}>
    <fieldset>
      <legend>{legend}</legend>
    </fieldset>
    {children}
    </form>;
}