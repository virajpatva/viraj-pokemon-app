import React, { useEffect, useState } from 'react'
import { Form, Field } from 'react-final-form'
import { useNavigate } from 'react-router-dom';

function LoginForm() {
  const [loggedIn, setLoggedIn] = useState(false)
  const navigate = useNavigate();
  useEffect(() => {
    let login = localStorage.getItem('loggedIn');
    if (login) {
      navigate('/');
    }
  }, [loggedIn]);
  return (<>
    <Form
      onSubmit={(values) => {
        let loginDetails = JSON.parse(localStorage.getItem('login'));
        if (loginDetails.some(details => details.email === values.email && details.password === values.password)) {
          localStorage.setItem('loggedIn', true);
          setLoggedIn(true);
        } else {
          console.log('invalid login');
        }
      }}
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

          if (passwordLength <= minPassLength) {
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
            <div className='form-controller'>
              <label htmlFor="email">Email  : </label>
              <Field name="email" component="input" type="email" placeholder="abc@gmail.com" />
            </div>
            <div className='form-controller'>
              <label htmlFor="password">Password  : </label>
              <Field name="password" component="input" type="password" placeholder="pas***ord" />
            </div>
            <div className='form-controller'>
              <button type='submit'>Login</button>
            </div>
          </form>
        )
      }}
    />
  </>);
}

export default LoginForm;