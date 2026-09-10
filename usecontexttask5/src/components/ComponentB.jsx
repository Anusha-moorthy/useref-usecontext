import { useContext } from "react"
import CounterContext from "../context/CounterContext"

const ComponentB = () => {

    const{count,handleClick} = useContext(CounterContext)

  return (
    <>
    <div>
        <p>{count}</p>
    </div>
    </>
  )
}

export default ComponentB