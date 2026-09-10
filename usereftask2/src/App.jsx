import { useRef } from "react"
import "./App.css"

const App = () => {

  const inputRef = useRef(null)
  // const showref = useRef(null)

  const handleClick = ()=>{
    inputRef.current.value = "Hello React"
  }
  return (
    <>
    <div>
      <input type="text" ref={inputRef} placeholder="Click button to see text" />
      <button onClick={handleClick}>Click me</button>
    </div>
    </>
  )
}

export default App