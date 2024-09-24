import { Link, Route, Routes, useNavigate } from "react-router-dom"


import fetchData from "./hooks/fetch-hooks"
import Authenticate from "./pages/Authenticate"
import TaskMenu from "./pages/TasksMenu"
import NewTask from "./pages/NewTask"
import TaskPage from "./pages/TaskPage"
import SignUpPage from "./pages/SignUp"
import { auth } from "./FireAuth/fireAuth"
import { onAuthStateChanged } from "firebase/auth"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"




function App() {
  const navigate = useNavigate()
  const [users, setUsers] = useState(null)
  const {user} = useSelector((state) => state.userData)
  const accessToken = user?.accessToken

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if(user && accessToken) {
        console.log('user is signed in')
        setUsers(users)
        navigate('/menu')
      } else {
        console.log('user is not signed in')
        setUsers(null)
        navigate('/login')
      }
    })
    return () => unSubscribe()
  }, [auth])

  return (
    
        <div>
          <Routes>
            <Route path='/new' element={<NewTask/>} />
            <Route path='/menu' element={<TaskMenu/>} />
            <Route path='/login' element={<Authenticate/>} /> 
            <Route path='/signup' element={<SignUpPage/>} />
          </Routes>
        </div>
  )
}

export default App
