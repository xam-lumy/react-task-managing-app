
import { Box, Button, Card, Grid, Menu, Paper, Popover, Typography } from "@mui/material"
import ClockComponent from '../../components/ClockComponent'
import MenuList from "../Menu"
import Header from "../../components/header"
import MenuBar from "../../components/MenuBar"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

import { getTasks } from "../../Redux/task/taskSlice"
import CreateTask from "../../components/NewTask"
import NewTask from "../NewTask"


const TaskMenu = () => {
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.userData)
  const { taskName, loading, error, isChecked } = useSelector((state) => state.taskName)

  const tokenAccess = user?.accessToken



  useEffect(() => {
    dispatch(getTasks(tokenAccess))
  }, [
    tokenAccess, dispatch, isChecked
  ])
  const taskPriority = taskName?.filter(task => task.priority === 'high')
  const number = taskPriority.length

  


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


      <Box>
        <Header number={number} />
      </Box>
      <Box>
        <MenuBar />


            <Typography variant="h5" margin={2} fontWeight='bold'>Category</Typography>
            <MenuList />

            
      </Box>
    </Box>
  )
}

export default TaskMenu