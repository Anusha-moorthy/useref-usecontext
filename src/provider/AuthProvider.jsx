
import { useState } from "react"
import AuthContext from "../context/AuthContext"


const AuthProvider = ({children}) => {

    const[isLoggedIn,setIsLoggedIn] = useState(false)

    const login = ()=>{
        setIsLoggedIn(true)
    }

  return (
    <>
        <AuthContext.Provider value={{isLoggedIn,setIsLoggedIn,login}}>
            {children}
        </AuthContext.Provider>
    </>
  )
}

export default AuthProvider