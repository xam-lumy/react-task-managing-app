import { Box, Grid, Paper, Typography } from "@mui/material"
import { red } from "@mui/material/colors"
import SignUp from "../../components/Authentication/SIgnUp"
import ClockComponent from "../../components/ClockComponent"
import SignIn from "../../components/Authentication/Login"
const SignUpPage = () => {
  return (
    <Box
    component="main"
    justifyContent="space-between"
    gap={5}
    mx={4}
    padding={10}
    display='flex'
    flexDirection='column'
    >
        
       <SignUp />
       </Box>
  )
}

export default SignUpPage