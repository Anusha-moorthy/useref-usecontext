import { useContext } from "react"
import AuthContext from "./context/AuthContext"
import Auth from "./components/Auth"

const App = () => {
  const{isLoggedIn,login} = useContext(AuthContext)

  return (
    <>
    <div style={{margin:20,padding:10}}>
      {isLoggedIn ? <p>Welcome User</p> :
      <button onClick={login}>Login</button>
      }
    </div>

    <Auth/>
    </>
  )
}

export default App