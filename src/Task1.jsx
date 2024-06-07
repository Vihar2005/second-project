import React,{useState} from 'react'

const Task1 = () => {
    const [count,setCount] = useState(0)
    const remove=()=>{
        setCount(count-1)
    }
  return (
    <div>
      <h3>Counter is - {count}</h3>
      <button onClick={()=>setCount(count+1)}>Add</button>
      <button onClick={remove}>Remove</button>
    </div>
  )
}

export default Task1

