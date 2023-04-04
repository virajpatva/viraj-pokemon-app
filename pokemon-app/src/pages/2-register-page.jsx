import { useState } from 'react'
import React from 'react'
import ReactDOM from 'react-dom/client'
const storeDate = (e) => {
  e.preventDeafault;
  console.log('register data here');
}
function RegisterPage() {
  return (
    <>
      <form onSubmit={storeDate}>
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
        <div className="form-controller">
          <label>Confirm Password
            <input type="password" />
          </label>
        </div>
        <button type="submit">Register</button>
      </form>
    </>
  )
}

export default RegisterPage;