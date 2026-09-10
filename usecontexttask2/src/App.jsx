import { useContext } from "react"
import UserContext from "./context/UserContext"
import User from "./components/User"

const App = () => {

  const user = useContext(UserContext)
  return (
    <>
    <div>
       <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <p>City: {user.city}</p>
    </div>
    
    <User/>
    </>
  )
}

export default App