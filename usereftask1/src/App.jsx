import { useRef, useState } from "react"
import './App.css'

const App = () => {

  const inputRef = useRef(null)

  const handleClick = (e)=>{
    
    inputRef.current.focus()
  }

  return (
    <>
    <div className="m-5 p-2">
      <input type="text" ref={inputRef} placeholder="Click button to focus" />
      <button onClick={handleClick}>Focus me!</button>
    </div>
    </>
  )
}

export default App