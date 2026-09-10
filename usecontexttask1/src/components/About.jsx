import { useContext } from "react"
import UserContext from "../context/UserContext"

const About = () => {
    const userName = useContext(UserContext)
  return (
    <div>
        <p>

            {userName} is one of the best user.
        </p>
    </div>
  )
}

export default About