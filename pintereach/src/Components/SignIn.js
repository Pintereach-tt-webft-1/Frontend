import react from 'react';
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
    const [user, setUser] =useState({})
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

    // const postNewUser =(newUser) =>{
    //     axios.post('https://reqres.in/api/users', newUser)
    //     .then((res)=>{
    //       setUser([res.data,... user])
    //       setFormValues(initialFormValues)
    //     })
    //     .catch((err)=>{
    //       console.log(err)
    //     })
    //   }

    // const formSubmit = ()=>{
    //     const newUser = {
    //       first_name:formValues.username.trim(),
    //       email:formValues.email.trim(),
    //       password:formValues.password.trim(),
          
    //     }
    //     postNewUser(newUser)
    //   }
    //   const onSubmit = (evt) => {
    //     evt.preventDefault();
    //     formSubmit();
    //   };


    return(
        <form className='form-container'>
            <div>
            <h2>Sign Up!</h2>
            </div>

            <div className='form-group-input'>
                <h4>What we need from you</h4>
                <lable>
                    Username
                    <input
                    type='text'
                    name='username'
                    value={values.username}
                    onChange={onChange}
                    placeholder='Username'
                    />
                </lable>
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