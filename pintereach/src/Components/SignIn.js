import React from 'react';
import { useState} from 'react'
import axios from 'axios'

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


export default function SignIn(){
    const [user, setUser] =useState([])
    const [formValues, setFormValues] = useState(initialFormValues)
    const [formErrors, setFormErrors] = useState(initialFormErrors)
    
    const values = formValues

   
    // Change Handler Section
    const inputChange = (name, value) =>{
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


    return(
        <form className='form-container' onSubmit={onSubmit}>
            <div>
            <h2>Sign Up!</h2>
            </div>

            <div className='form-group-input'>
                <h4>What we need from you</h4>
                <label>
                    Username
                    <input
                    type='text'
                    name='username'
                    value={values.username}
                    onChange={onChange}
                    placeholder='Username'
                    />
                </label>
                <label>
                    Email
                    <input
                    type = 'email'
                    name = 'email'
                    value={values.email}
                    onChange={onChange}
                    placeholder ='Email'
                    />
                </label>
                <label>
                    Password
                    <input
                    type='text'
                    name ='password'
                    value={values.password}
                    onChange={onChange}
                    placeholder ='Password'
                    />
                </label>
                <div>
                <button>Submit</button>
                </div>
            </div>
        </form>


    )
}