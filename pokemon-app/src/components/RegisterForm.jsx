import React from 'react'
import { Form, Field } from 'react-final-form'
const onSubmit = (e) => {
  e.preventDeafault;
  console.log('onSubmit Called');
}

function RegisterForm() {
  return (<>
    <Form
      onSubmit={(values) => {
        let logins;
        if (localStorage.getItem('login') === null) {
          logins = []
        } else {
          logins = JSON.parse(localStorage.getItem('login'));
        }

        console.log(logins.some(details => details.email === values.email))
        let newLogin = { email: values.email, password: values.password }
        if (logins.some(details => details.email === values.email)) {
          console.error('similar user already exists');
        } else {
          logins.push(newLogin);
          console.log(logins);
          localStorage.setItem('login', JSON.stringify(logins));
          console.log('registered');
        }
      }}
      validate={values => {
        const errors = {}
        const minPassLength = 4;
        const maxPassLength = 15;
        const minEmailLength = 5;
        const maxEmailLength = 100;
        if (!values.email) {
          errors.email = 'Required'
        } else {
          const emailLength = values.email.length;
          if (emailLength < minEmailLength || emailLength > maxEmailLength) {
            errors.email = 'Email of invalid length'
          }
        }
        if (!values.password) {
          errors.password = 'Required'
        } else {
          const passwordLength = values.password.length;
          const digitsRegExp = /(?=.*?[0-9])/;
          const digitsPassword = digitsRegExp.test(values.password);
          if (passwordLength <= minPassLength || passwordLength >= maxPassLength) {
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
        return errors
      }}
      render={renderProps => {
        const { handleSubmit } = renderProps;
        return (
          <form className="basicform" onSubmit={handleSubmit}>
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