import { Box, TextField, Typography, Button } from '@mui/material'
import React, {useState} from 'react'

import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { createANewUser } from '../../../Redux/user/userSlice';
import Verification from '../../Verification';
import { red } from '@mui/material/colors';


const SignUp = () => {
  const [passwordError, setPasswordError] = useState(false)
  const dispatch = useDispatch()
  const { user,  loading, error, isAuthenticated, isVerified} = useSelector((state) => state.userData)
 
  const [textValue, setTextValue] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  
  const navigate = useNavigate()
  const handleChange = (event) => {
    const {name, value} = event.target
    setTextValue({
      ...textValue,
      [name]: value
    })
  }

 




 
 
   const handleSubmit =  async(event) => {
    event.preventDefault()
      
      const {email, password, firstName, lastName, confirmPassword} = textValue
     const additionalData = {
       firstName: firstName,
       lastName: lastName, 
     }
     if(password !== confirmPassword) {
      setPasswordError(!passwordError)
      setTextValue(
        {
          password: '',
        confirmPassword: ''
      }
      )
     }
     else {
      dispatch(createANewUser({email: email, password: password, additionalData}))
      setTextValue(
        {
        email: '', 
        password: '', 
        firstName: '', 
        lastName: '', 
        confirmPassword: ''
      }
      )
     }
      
  }
  
  

  return (
    <Box 
    >
    {
      isAuthenticated === true && isVerified === false? (<Verification />):( 
      <Box>
                <Typography color="primary.main" textAlign='center' variant='h5' component="h5">Sign up</Typography>
        <form onSubmit={handleSubmit}>

        
        <TextField
          type='text'
          label="First Name"
          name="firstName"
          variant='filled'
          onChange={handleChange}
          value= {textValue.firstName}
        />
        <TextField
        type='text'
        label="Last Name"
        name="lastName"
        variant="filled"
        onChange={handleChange}
        value= {textValue.lastName}
        />
        <TextField
        type='email'
        label="Email"
        name="email"
        variant="filled"
        onChange={handleChange}
        value= {textValue.email}
        />
        <TextField
        type='password'
        label="Password"
        name="password"
        variant="filled"
        onChange={handleChange}
        value= {textValue.password}
        />
        <TextField
        type='password'
        label="Confirm Password"
        name="confirmPassword"
        variant="filled"
        onChange={handleChange}
        value= {textValue.confirmPassword}
        />
        <Button type='submit'>Submit</Button>
        <Typography textalign="center" color="primary.main">Already have an account? Sign in</Typography>
        {
        passwordError&&<Typography color='error'>Password does not correlate</Typography>
      }
      </form>

      </Box>
      )}
    
        

      
    </Box>
  )
}

export default SignUp