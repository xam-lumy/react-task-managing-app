import { Box, TextField, Typography, Button } from '@mui/material'
import React, {useState, useContext, useEffect} from 'react'

import { Link } from 'react-router-dom'
import { UserContext } from '../../../Context/UserContext'
import { useSelector, useDispatch } from 'react-redux'
import { loginAUser } from '../../../Redux/user/userSlice'




const SignIn = () => {
  const [loginText, setLoginText] = useState({
    email: '',
    password: ''
  })

 const dispatch = useDispatch()
 const state= useSelector((state) => state.userData)
console.log(state)
  const handleChange = (event) => {
    const {name, value} = event.target
    setLoginText({
      ...loginText,
      [name]:value
    })
  }
const handleSubmit = async(event) => {
  event.preventDefault()
  const {email, password} = loginText 
  dispatch(loginAUser({email: email, password: password}))
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



  return (
    <Box 
    height="40vh"
    width= {400}
    display="flex"
    my={20}
    gap={1.5}
    p={2}
    sx={{ backgroundColor: 'primary.lightBack'}}
    flexDirection="column"
    justifyContent="start"
    >
      <Typography color="primary.main" variant='h5' component="h5">Sign in</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
        type='email'
        label="Email"
        name="email"
        variant="filled"
        value={loginText.email}
        onChange={handleChange}
        />
        <TextField
        type='password'
        label="Password"
        name="password"
        variant="filled"
        value={loginText.password}
        onChange={handleChange}
        />
        
        <Button type='submit'>Submit</Button>
      </form>
      <Link to= '/signup'><Typography sx={{mb: 4}} textAlign="center" color="primary.main">
        Don't have an account? Sign up</Typography>
      </Link>
    </Box>
  )
}

export default SignIn