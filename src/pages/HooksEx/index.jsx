import React, { useEffect, useRef } from 'react'

const HooksEx = () => {
    const divElement = useRef()
    const focusedMode = useRef()
  
useEffect(() => {
    const ChangeColor = divElement.current
    focusedMode.current.focus()
    setTimeout(() => {
        ChangeColor.style.color = 'green'
    }, 2000);
},[])
  return (
    <div>
        <h1 ref={divElement}>Hello, Olumide</h1>
        <input type='text' name='email' ref={focusedMode}/>
    </div>
  )
}

export default HooksEx