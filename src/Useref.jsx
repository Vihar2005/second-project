import React, { useEffect, useRef } from 'react'
import { useState } from 'react'

const Useref = () => {
    let a = useRef(0);
    // let a = 0;
    const [count,setCount] = useState(0)
    // useEffect(()=>{
    //     a.current=a.current+1;
    //     console.log("a is "+a.current);
    // })
    useEffect(()=>{
        a.current=a.current+1
        console.log("a is "+a.current)
    })
    const addCounter = ()=>{
        setCount(count+1)
    }
    // const addCounter = ()=>{
    //     return a.current;
    // }
  return (
    <div>
      <h3>Use Ref example</h3>
      <h4>Counter is : {count}</h4>
      <button onClick={addCounter}>Add</button>
      <h4>A is :{a.current}</h4>
      {/* <button onClick={addCounter}>Add</button> */}
    </div>
  )
}

export default Useref
