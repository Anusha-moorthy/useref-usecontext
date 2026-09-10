import { useState } from "react"
import ThemeContext from "../context/ThemeContext"

const ThemeProvider = ({children}) => {

    const[theme,setTheme] = useState('Light Mode')

    const handleClick = ()=>{
        if (theme === "Light Mode") {
            setTheme("Dark Mode");
        } else {
            setTheme("Light Mode");
        }
    }

  return (
    <ThemeContext.Provider value={{theme,setTheme,handleClick}}>
        {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider