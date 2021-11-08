import React, { useState, useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import { loginUser, logoutUser } from '../../../redux/actions/authActions'


const LoginForm = (props) => {
    const [userData, setUserData] = useState({email: "", password: ""})
    const loginError = useSelector(state => state.auth.error)
    const dispatch = useDispatch()

    useEffect(() => {
      if (loginError) {
        alert(loginError)
        dispatch(logoutUser())
      }
    }, [loginError])

    const login = (e) => {
      e.preventDefault();
      try {
        dispatch(loginUser(userData.email, userData.password))
      } catch (err) {
        console.log(err);
      }
    }

    const onChange = (e) => {
      setUserData({ ...userData, [e.target.name]: e.target.value});
    }

    return (
      <>
      <form onSubmit={login}>
        <div className="form-group">
          <label htmlFor="inputEmail">Email</label>
          <input type="text" className="form-control" id="inputEmail"
          name="email" placeholder="test@test.com" 
          value={userData.email} onChange={onChange}></input>
        </div>
        <div className="form-group">
          <label htmlFor="inputPassword">Password</label>
          <input type="password" className="form-control" id="inputPassword"
          name="password" value={userData.password}
          onChange={onChange}></input>
        </div>
        <div className="d-flex justify-content-center">
            <button type="submit" className="btn btn-primary">Login</button>
        </div>
        <div style={{textAlign: 'center'}}>
        No Account?
        </div>
        <div className="d-flex justify-content-center">
          <Link to={'/register'}>
            <button className="btn btn-secondary">Register</button>
          </Link>
        </div>
      </form>
      </>
    );
}

export default LoginForm