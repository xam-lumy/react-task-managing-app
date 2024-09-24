import { Grid, Paper, Typography } from "@mui/material"
import { red } from "@mui/material/colors"
import SignUp from "../../components/Authentication/SIgnUp"
import ClockComponent from "../../components/ClockComponent"
import SignIn from "../../components/Authentication/Login"
const Authenticate = () => {
  return (
    <Grid 
      container
      component="main"
      justifyContent="space-around"
       space={5}
       mx={4}
    >
     <Grid item xs={12} sm={12} md={6} lg={6}>
          <ClockComponent />
     </Grid>
     <Grid item xs={12} sm={12} md={6} lg={4}>
        {/* <SignUp /> */}
       <SignIn />
    </Grid>
    </Grid>
  )
}

export default Authenticate