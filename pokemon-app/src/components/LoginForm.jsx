import React from 'react'
import { Form, Field } from 'react-final-form'
const onSubmit = (e) => {
  e.preventDeafault;
  console.log('onSubmit Called');
}

function LoginForm() {
  return (<>
    <Form
      onSubmit={(values) => { console.log('logged in successfully') }}
      validate={values => {
        const errors = {}
        const minPassLength = 4;
        if (!values.email) {
          errors.email = 'Required'
        }
        if (!values.password) {
          errors.password = 'Required'
        } else {
          const passwordLength = values.password.length;

          if (passwordLength <= 4) {
            errors.password = 'Too short password'
          }
        }
        console.log(errors);
        return errors
      }}
      render={renderProps => {
        const { handleSubmit } = renderProps;
        return (
          <form onSubmit={handleSubmit} className='basicform'>
            <div>
              <label htmlFor="email">Email  : </label>
              <Field name="email" component="input" type="email" placeholder="abc@gmail.com" />
            </div>
            <div>
              <label htmlFor="password">Password  : </label>
              <Field name="password" component="input" type="password" placeholder="pas***ord" />
            </div>
            <div>
              <button type='submit'>Login</button>
            </div>
          </form>
        )
      }}
    />
  </>);
}

export default LoginForm;