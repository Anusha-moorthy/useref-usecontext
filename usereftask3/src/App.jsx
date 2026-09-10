import { useRef } from "react"
import "./App.css"

const App = () => {

  const inputRef = useRef(null)

  const handleClick = (e)=>{
    console.log(inputRef);
    
    inputRef.current.value=""
  }

  return (
    <>
      <div className="m-10 p-2">
        <input type="text" ref={inputRef} defaultValue={"default value"} placeholder="Enter text" />
        <button onClick={handleClick}>Clear</button>
      </div>
    </>
  )
}

export default App