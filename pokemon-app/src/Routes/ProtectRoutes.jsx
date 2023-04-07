import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
const useAuth = () => {
  let auth = localStorage.getItem('loggedIn')
  if (auth) {
    return true;
  } else {
    return false;
  }
}

const ProtectedRoutes = (props) => {
  const { Component } = props
  const navigate = useNavigate();
  useEffect(() => {
    let isAuth = useAuth();
    if (!isAuth) {
      navigate('/login');
    }

  })
  return <Component />
}

export default ProtectedRoutes;