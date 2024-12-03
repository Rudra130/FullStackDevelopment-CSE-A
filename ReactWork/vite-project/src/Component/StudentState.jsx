import React, { useState } from 'react'

const StudentState = () => {

    const [count,setCount] =useState(100)
    function increment(){
      setCount(count+1)
    }
    function decrement(){
      setCount(count-1)
    }
  return (
   <>
    <button onClink={increment}>DoIncrement</button>
    <button onClick={decrement}>DoDecrement</button>
    <p>{count}</p>

    </>

   
    
  )
}

export default StudentState