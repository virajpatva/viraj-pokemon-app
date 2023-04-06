import React from 'react'
import { Form, Field } from 'react-final-form'
const onSubmit = (e) => {
  e.preventDeafault;
  console.log('onSubmit Called');
}

function RegisterForm() {
  return (<>
    <Form
      onSubmit={(values) => { console.log('registerd in successfully') }}
      validate={values => {
        const errors = {}
        const minPassLength = 4;
        if (!values.email) {
          errors.email = 'Required'
        } else {
          const emailLength = values.email.length;
          if (emailLength < 5 || emailLength > 100) {
            errors.email = 'Email of invalid length'
          }
        }
        if (!values.password) {
          errors.password = 'Required'
        } else {
          const passwordLength = values.password.length;
          const digitsRegExp = /(?=.*?[0-9])/;
          const digitsPassword = digitsRegExp.test(values.password);
          if (passwordLength <= 4 || passwordLength >= 15) {
            errors.password = 'Password of invalid length'
          } else {
            if (!digitsPassword) {
              errors.password = 'password doesnt have digit'
            }
          }
        }
        if (!values.confpassword) {
          errors.confpassword = 'Required'
        } else {
          if (values.confpassword !== values.password) {
            errors.confpassword = "password did not match"
          }
        }
        console.log(errors);
        return errors
      }}
      render={renderProps => {
        const { handleSubmit } = renderProps;
        return (
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email">Email  : </label>
              <Field name="email" component="input" type="email" placeholder="abc@gmail.com" />
            </div>
            <div>
              <label htmlFor="password">Password  : </label>
              <Field name="password" component="input" type="password" placeholder="pas***ord" />
            </div>
            <div>
              <label htmlFor="confpassword">Conf Password  : </label>
              <Field name="confpassword" component="input" type="password" placeholder="pas***ord" />
            </div>
            <button type="submit">Register</button>
          </form>
        )
      }}
    />
  </>);
}

export default RegisterForm;