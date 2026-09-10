import { useContext } from "react"
import UserContext from "../context/UserContext"


const User = () => {
    const user = useContext(UserContext)
  return (
    <>
    <div>
        <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <p>City: {user.city}</p>
    </div>
    </>
  )
}

export default User