import React, { useState } from 'react';
import { SERVER_IP } from "../../../private";
import axios from 'axios'


const RegisterForm = (props) => {
  const [userData, setUserData] = useState({email: "", password: ""})

 const registerUser = async (e) => {
      e.preventDefault();
      try {
        await axios
          .post(
            `${SERVER_IP}/api/register`,
            {
              email: userData.email,
              password: userData.password,
            }
          )
        props.onRegister()
      } catch (err) {
        console.log(err.response.data.msg);
        alert(err.response.data.msg);
      }
}

  const onChange = (e) => {
      setUserData({ ...userData, [e.target.name]: e.target.value});
    }


    return (
      <form onSubmit={registerUser}>
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
            <button type="submit" className="btn btn-primary">Register</button>
        </div>
      </form>
    );
  }


export default RegisterForm;