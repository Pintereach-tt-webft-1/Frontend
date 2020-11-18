import React, {useState, useEffect} from 'react';
import axios from 'axios';
// import { Link } from 'react-router-dom';
import '../Login.css'
import * as yup from "yup"
import schema from './Schema';

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
    const [errors, setErrors] = useState(initialFormErrors)
    // const [disabled, setDisabled]=useState(true)


    const setFormErrors =(name, value) => {
        yup.reach(schema, name).validate(value)
        .then(() => setErrors({ ...errors, [name]: '' }))
        .catch(err => setErrors({ ...errors, [name]: err.errors[0] }))
    }



    const login = e => {
        e.preventDefault();
        
        axios.post('http://unit4-bw.herokuapp.com/login', `grant_type=password&username=${formValues.username}&password=${formValues.password}`, {
          headers: {
            // btoa is converting our client id/client secret into base64
            Authorization: `Basic ${btoa('lambda-client:lambda-secret')}`,
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        }).then(res => {
            
          console.log("data", res.data)
          localStorage.setItem('token', res.data.access_token);
        //window.location='/';
        }).catch(error => {
            
            console.log("error", error);
        })
        setFormValues(initialFormValues)
      }




    const onChange = e => {
        const { value, name } = e.target
        setFormValues({...formValues,[e.target.name]: e.target.value})
        setFormErrors(name, value)
    }

    // useEffect(() => {
    //     schema.isValid(formValues).then(valid => setDisabled(!valid))
    // }, [formValues])

return(
    <div className="login-box">
        <div className="login-logo" >
            <img src="https://i.imgur.com/lmdVQMv.png" width="200px" alt="pintereach logo"/>
        </div>
  <h2>Login</h2>
  <form onSubmit={login}>
    <div className="user-box">
      <p className='error' >{errors.username}</p>
      <input type="text" name="username" placeholder="Username" value={formValues.username} onChange={onChange}/>
      <label>Username</label>
    </div>
    <div className="user-box">
        <div>
    <p className='error'>{errors.password}</p>
      </div>
      <input type="password" name="password" placeholder="Password" value={formValues.password} onChange={onChange}/>
      <label>Password</label>
    </div>
    <div className="btnDiv">
    <button  type='submit'>Log In</button>
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