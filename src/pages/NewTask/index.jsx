import { Box, Button, Grid, Paper, Popover, Typography } from "@mui/material"
import { red } from "@mui/material/colors"
import SignUp from "../../components/Authentication/SIgnUp"
import ClockComponent from "../../components/ClockComponent"
import SignIn from "../../components/Authentication/Login"
import CreateTask from "../../components/NewTask"
import { useState } from "react"
const NewTask = () => {
  const [anchorEl, setAnchorEl] = useState(null)
  const handleClick = (event) => {
    {
      setAnchorEl(event.currentTarget)
    }
  }
 
 
  
  const handleClose = () => {
    setAnchorEl(null)
  }
 
  const openTab = Boolean(anchorEl)
  const id = openTab? 'simple-popover': undefined
  return (
    <Box
    width= {400}
    display="flex"
    gap={1.5}
    p={4}
    sx={{ backgroundColor: 'primary.lightBack', color: 'primary.main'}}
    flexDirection="column"
    justifyContent="start"
    >
      <Button onClick={handleClick} variant='outlined'>Create New Task</Button>
      <Popover
             id={id}
             open={openTab}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
              }}
       ><CreateTask /></Popover>
    </Box>
  )
}

export default NewTask