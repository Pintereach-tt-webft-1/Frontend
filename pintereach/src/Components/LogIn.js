import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link, Route } from 'react-router-dom';
import '../Login.css'

const initialFormValues = {
    username:'',
    password:'',
}
const initialFormErrors = {
    username:'',
    password:'',
}

function LogIn(props){

    
    const [formValues, setFormValues] = useState(initialFormValues)
    const [formErrors, setFormErrors] = useState(initialFormErrors)

    const inputChange = (name, value) =>{
        setFormValues({...formValues,[name]:value
        })
    }

    const onChange = (evt) => {
        const {name, value }=evt.target;
        inputChange(name, value)
    }

      const onSubmit = (evt) => {
        evt.preventDefault();
        console.log(formValues)
        setFormValues(initialFormValues)
      };

    


return(
    <div className="login-box">
        <div className="login-logo" >
            <img src="https://i.imgur.com/lmdVQMv.png" width="200px" alt="pintereach logo"/>
        </div>
  <h2>Login</h2>
  <form onSubmit={onSubmit}>
    <div className="user-box">
      <input type="text" name="username" placeholder="Username" value={formValues.username} onChange={onChange}/>
      <label>Username</label>
    </div>
    <div className="user-box">
      <input type="password" name="password" placeholder="Password" value={formValues.password} onChange={onChange}/>
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