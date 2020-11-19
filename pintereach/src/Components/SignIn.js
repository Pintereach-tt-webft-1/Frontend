import React from 'react';
import { useState, useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import * as yup from 'yup';
import schema from './Schema'

const initialFormValues = {
    username:'',
    email:'',
    password:''
}
const initialFormErrors = {
    username:'',
    email:'',
    password:''
}
const initialDisabled = true

export default function SignIn(){
    const [user, setUser] =useState([])
    const [formValues, setFormValues] = useState(initialFormValues)
    const [formErrors, setFormErrors] = useState(initialFormErrors)
    const [disabled, setDisabled] = useState(initialDisabled)
    
    const values = formValues

   
    // Change Handler Section
    const inputChange = (name, value) =>{
        yup.reach(schema, name)
        .validate(value)
        .then(()=>{
            setFormErrors({
                ...formErrors,
                [name]:'',
            })
        })
        .catch((err)=>{
            setFormErrors({
                ...formErrors,
                [name]:err.errors[0],
            });
        })
        setFormValues({
            ...formValues,
            [name]:value
        })
    }
    const onChange = (evt) => {
        const {name, value }=evt.target;
        inputChange(name, value)
    }

    const postNewUser =(newUser) =>{
        axios.post('http://unit4-bw.herokuapp.com/createnewuser', newUser)
        .then((res)=>{
            console.log(res, 'res')
          setUser([res.data, ...user])
          setFormValues(initialFormValues)
        })
        .catch((err)=>{
          console.log(err)
        })
      }
      


    const formSubmit = ()=>{
        const newUser = {
          username:formValues.username.trim(),
          primaryemail:formValues.email.trim(),
          password:formValues.password.trim(),
          
        }
        postNewUser(newUser)
      }
      const onSubmit = (evt) => {
        evt.preventDefault();
        formSubmit();
      };
      useEffect(()=>{
          schema.isValid(formValues).then((valid)=>{
              setDisabled(!valid)
          })
      }, [formValues])


    return(
        <div className='pusher' onSubmit={onSubmit}>
            <div className='login-box'>
                <div className='login-logo'>
                    <img src="https://i.imgur.com/lmdVQMv.png" width="200px" alt="pintereach logo"/>
                </div>
            

                <h2>Sign Up</h2>
                <form onSubmit={onSubmit}>
                <div className='user-box'>
                    <input
                    type='text'
                    name='username'
                    value={values.username}
                    onChange={onChange}
                    placeholder='Username'
                    />
                    <label>
                    Username
                    </label>
                </div>
                <div className='user-box'>
                    <p className='error' >{formErrors.username}</p>
                    <input
                    type = 'email'
                    name = 'email'
                    value={values.email}
                    onChange={onChange}
                    placeholder ='Email'
                    />
                    <label>
                    Email
                    </label>
                    </div>
                    <div className='user-box'>
                    <p className='error' >{formErrors.email}</p>
                    <input
                    type='text'
                    name ='password'
                    value={values.password}
                    onChange={onChange}
                    placeholder ='Password'
                    />
                    <label>
                    Password
                    </label>
                    <p className='error' >{formErrors.password}</p>

                    </div>
                <div className ='btnDiv'>
                <button disabled={disabled}>Submit</button>
                </div>
                </form>
                <div className='SignUp'>
                    <a href ='#'>Forgot Password</a>
                    <Link to ='/login'>Login</Link>
                </div>
            </div>
        </div>


    )
}