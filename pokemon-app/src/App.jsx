import { useState } from 'react'
import reactLogo from './assets/react.svg'
import LoginPage from './pages/1-login-page'
import RegisterPage from './pages/2-register-page'
import ListingPage from './pages/3-listing-page'
import DetailsPage from './pages/4-details-page'
import ErrorPage from './pages/5-error-page'
import Header from './components/Header'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import '../dist/css/app.css'
function App() {

  return (

    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<LoginPage />}></Route>
        <Route exact path='/register' element={<RegisterPage />}></Route>
        <Route exact path='/listpokemon' element={<ListingPage />}></Route>
        <Route exact path='/listpokemon/:id' element={<DetailsPage />}></Route>
        <Route path="/*" element={<ErrorPage />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
