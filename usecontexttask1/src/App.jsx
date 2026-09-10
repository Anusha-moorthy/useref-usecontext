import { useContext } from "react"
import UserContext from "./context/UserContext"
import About from "./components/About"

const App = () => {
  const userName = useContext(UserContext)
  return (
    <>
    <div>
      <p>Logged in as: {userName}</p>
    </div>
    <About/>
    </>
  )
}

export default App