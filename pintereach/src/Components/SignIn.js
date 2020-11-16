import react from 'react';


export default function SignIn(){


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
                    placeholder='Username'
                    />
                </lable>
                <label>
                    Email
                    <input
                    type = 'email'
                    name = 'email'
                    placeholder ='Email'
                    />
                </label>
                <label>
                    Password
                    <input
                    type='text'
                    name ='password'
                    placeholder ='Password'
                    />
                </label>

            </div>
        </form>


    )
}