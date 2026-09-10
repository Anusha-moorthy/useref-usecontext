import React, { useRef } from 'react'
import "./App.css"

// const App = () => {

//   const nameRef = useRef(null)
//   const emailRef = useRef(null)
//   const mobileRef = useRef(null)

//   const handleClick = ()=>{
//     nameRef.current.focus()
//   }
//   const emailClick = ()=>{
//     emailRef.current.focus()
//   }
//   const mobileClick = ()=>{
//     mobileRef.current.focus()
//   }

//   return (
//     <>
//       <div className='m-10 p-2 flex flex-col w-50'>
//         <input type='text' ref={nameRef} placeholder='Enter name'/> 
//         <button onClick={handleClick}>Click</button>
//         <input type='email' ref={emailRef} placeholder='Enter email'/>
//         <button onClick={emailClick}>Click</button>
//         <input type='number' ref={mobileRef} placeholder='Enter mobile number'/>
//         <button onClick={mobileClick}>Click</button>
//       </div>
//     </>
//   )
// }

// export default App



// const App = () => {

//   const timer = useRef(0)
//   const showTimer = useRef(0)

//   const startTimer = ()=>{
//     let count = 0
//     timer.current = setInterval(() => {
//       showTimer.current.textContent = count++
//     }, 1000);
//   }

//   const stopTimer = ()=>{
//     clearInterval(timer.current)
//   }
//   return (
//     <>
//     <div className='m-10 p-2 flex flex-row gap-6'>
//       <button className='m-2 bg-green-600! text-white rounded' onClick={startTimer}>Start</button>
//       <p ref={showTimer}></p>
//       <button className='m-2 bg-red-600! text-white rounded' onClick={stopTimer}>Stop</button>
//     </div>
//     </>
//   )
// }

// export default App


const App = () => {

  const inputRef = useRef(false)
  const buttonRef = useRef(null)

  const handleClick = ()=>{
    // console.log(inputRef);
    
    if(inputRef.current){
      buttonRef.current.textContent = 'OFF'
      buttonRef.current.style.backgroundColor = 'white'
    }else {
      buttonRef.current.textContent = 'ON'
      buttonRef.current.style.backgroundColor = 'green'
    }
  }

  return (
    <>
      <div className='m-10 p-2'>
        <button className='m-2 bg-white text-black rounded border-2' ref={buttonRef} onClick={handleClick}>OFF</button>
      </div>
    </>
  )
}

export default App