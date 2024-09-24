import {Typography, Box, Button } from '@mui/material'
import React from 'react'
import { auth } from '../../FireAuth/fireAuth'
import { signOut } from 'firebase/auth'
import { useSelector } from 'react-redux'
const Header = ({number}) => {
  const {user} = useSelector((state) => state.userData)
  const handleLogOut = () => {
    signOut(auth)
  }
  return (
    <Box
      width={400}
      display="flex"
      p={4}
      sx={{ backgroundColor: 'secondary.main', color: 'primary.lightBack', textAlign: 'left' }}
      flexDirection="column"
      justifyContent="start"
    >
      <Typography variant='h4' fontWeight='bold'>Hi,</Typography>
      <Typography variant='h5' fontWeight='bold'>{user?.firstName} {user?.lastName}</Typography>
      <Typography variant='body'>You have {number} urgent task to complete</Typography>
      <Button color='error' onClick={handleLogOut}>sign out</Button>
    </Box>
  )
}

export default Header