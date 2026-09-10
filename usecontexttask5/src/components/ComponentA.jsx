import { useContext } from "react"
import CounterContext from "../context/CounterContext"


const ComponentA = () => {
    const{count,handleClick} = useContext(CounterContext)
  return (
    <>
    <div>
        <button onClick={handleClick}>Increment</button>
    </div>
    </>
  )
}

export default ComponentA