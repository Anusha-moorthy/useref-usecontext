import { useRef } from "react"
import "./App.css"

const App = () => {

  const inputRef = useRef(null)

  const handleClick = (e)=>{
    inputRef.current.style.backgroundColor = "green"
  }

  return (
    <>
    <div className="m-10 p-2">
      <div className="border-2 border-black rounded w-45 h-35 my-2 bg-amber-300" ref={inputRef}>Box</div>
      <button onClick={handleClick}>Click</button>
    </div>
    </>
  )
}

export default App