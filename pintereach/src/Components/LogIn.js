import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link, Route } from 'react-router-dom';
import '../Login.css'


function LogIn(props){

    const [form,setForm]=useState({
        user: '',
        password: '',
    });

    const [errors,setErrors]=useState({
        user: '',
        password: '',
    });

    const change = event => {
        setForm(event.target.value);
    };

    const submit = event => {
        debugger;
        event.preventDefault();
        const newUser={
            user: form.user,
            password: form.password
        }
    }

return(
    <div className="login-box">
        <div className="login-logo" >
            <img src="https://i.imgur.com/lmdVQMv.png" width="200px" alt="pintereach logo"/>
        </div>
  <h2>Login</h2>
  <form>
    <div className="user-box">
      <input type="text" name="" placeholder="Username" value={form.user} onChange={change}/>
      <label>Username</label>
    </div>
    <div className="user-box">
      <input type="password" name="password" placeholder="Password" value={form.password} onChange={change}/>
      <label>Password</label>
    </div>
    <div className="btnDiv">
    <button type='submit'>Log In</button>
    </div>
  </form>
  <div className="SignUp" >
        <a href="#">Forgot Password</a>
        <a href="#">Register</a>
    </div>
</div>
)

};

export default LogIn;