import { useState } from 'react'
import React from 'react'
import ReactDOM from 'react-dom/client'
const login = (e) => {
  e.preventDeafault;
  console.log('register data here');
}
function LoginPage() {
  return (
    <>
      <form onSubmit={login}>
        <div className="form-controller">
          <label> Email
            <input type="email" />
          </label>
        </div>
        <div className="form-controller">
          <label> Password
            <input type="password" />
          </label>
        </div>
        <button type="submit">Login</button>
      </form>
    </>
  )
}

export default LoginPage;