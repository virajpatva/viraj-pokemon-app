import { useState } from 'react'
import reactLogo from './assets/react.svg'
import LoginPage from './pages/1-login-page'
import RegisterPage from './pages/2-register-page'
import ListingPage from './pages/3-listing-page'
import DetailsPage from './pages/4-details-page'
import Header from './components/Header'
import '../dist/css/app.css'
function App() {

  return (
    <div>
      <Header />
      <br />
      <ListingPage />
      <br />
      <DetailsPage id={1} />
    </div>
  )
}

export default App
