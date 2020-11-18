import * as yup from 'yup';


const schema = yup.object().shape({
    username: 
    yup.string().required('username field is required'),
    email: 
    yup.string().email().required('email is required'),
    password: 
    yup.string().required('password is required'),
    
})

export default schema;