import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import ListingPage from "../pages/3-listing-page";
const useAuth = () => {
  let auth = localStorage.getItem('loggedIn')
  if (auth) {
    return true;
  } else {
    return false;
  }
}

const RegisterRoutes = (props) => {
  const { Component } = props
  const navigate = useNavigate();
  return useAuth() ? <ListingPage /> : <Component />
}

export default RegisterRoutes;