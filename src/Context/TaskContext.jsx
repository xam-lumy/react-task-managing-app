import { createContext, useEffect, useReducer, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getTaskFailure, getTaskStart, getTaskSuccess } from "../Redux/task/taskSlice";
import { getUpdateStart, getUpdateFailure, getUpdateSuccess } from "../Redux/update-task/updateTask";

export const TaskContext = createContext()
const dispatch = useDispatch



export const TaskProvider = ({children}) => {
    const [tasks, setTasks ] = useState()
    const {user} = useSelector((state) => state.userData)
    const tokenAccess = user?.accessToken
    useEffect(() => {
        if(!tokenAccess) {
          console.error('Token is missing')
          return 
        }
        
        const getTask = async() => {
          try {
            dispatch(getTaskStart())
            const response = await fetch('http://localhost:5000/task/userTask', {
              method: 'GET',
              headers: {
                'token':`Bearer ${tokenAccess}`,
                'Content-Type': 'application/json'
              }
              
            })
            
            if(!response.ok) {
              dispatch(getTaskFailure(response.statusText))
            } 
            const data = await response.json()
            dispatch(getTaskSuccess(data))
          } catch(error) {
            dispatch(getTaskFailure(error.message))
          }
        }
       getTask()
      },[
        tokenAccess, 
      ])

  

    useEffect(() => {
        const upDateTask = async(id, upTask, upStatus, upPriority) => {
            const findTask = tasks.find(task => task._id === id)
            console.log(findTask)
            try {
             dispatch(getUpdateStart())
              const response = await fetch(`http://localhost:5000/task/${id}`, {
                method: 'PUT',
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify({
                  task: upTask,
                  status: upStatus,
                  priority: upPriority
                })
              })
              if(!response.ok){
                console.log('error thrown')
              }
          
                dispatch(getUpdateSuccess(data))

              navigate()
            } catch(error){
              dispatch(getUpdateFailure(error.message))
            }
           }
    }, [id])


    return (
        <TaskContext.Provider>
            {children}
        </TaskContext.Provider>
    )
}