import { useContext } from "react"
import ThemeContext from "./context/ThemeContext"
import Theme from "./components/Theme"


const App = () => {
  const{theme,setTheme,handleClick} = useContext(ThemeContext)
  
  return (
    <>
      <div style={{backgroundColor:theme=='Light Mode' ? '#ffffff' : '#222222', color:theme=='Light Mode' ? '#000000' : '#ffffff',padding:20}}>

        <p>{theme}</p>

        <button onClick={handleClick}>Click</button>
      </div>

      <Theme/>
    </>
  )
}

export default App