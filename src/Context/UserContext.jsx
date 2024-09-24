import { createContext, useEffect, useState } from "react";


export const UserContext = createContext()

export const UserProvider = ({children}) => {
    const [userInfo, setUserInfo] = useState(null)

    useEffect(() => {
        const getUser = localStorage.getItem('userData');
        if(getUser) {
            setUserInfo(getUser)
        } 
    }, [])

    const saveUser = (newUser) => {
        setUserInfo(newUser);
        localStorage.setItem('userData', newUser)
    }
    return (
        <UserContext.Provider value={{userInfo, saveUser}}>
            {children}
        </UserContext.Provider>
    )
}