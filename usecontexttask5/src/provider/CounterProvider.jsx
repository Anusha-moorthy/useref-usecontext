import { useState } from "react"
import CounterContext from "../context/CounterContext"


const CounterProvider = ({children}) => {
    const[count,setCount] = useState(0)

    const handleClick = ()=>{
        setCount(count+1)
    }

  return (
    <CounterContext.Provider value={{count,setCount,handleClick}}>
        {children}
    </CounterContext.Provider>
  )
}

export default CounterProvider