import React, { useEffect, useState } from 'react'

const lifecycleFunction = (props) => {
    const [color,setColor] = useState("red")
    useEffect(()=>{
        setTimeout(() => {
            setColor(props.color)
        }, 3000);
    })
  return (
    <div>
      <h3>LifeCycle function based</h3>
      Color is : {color}
    </div>
  )
}

export default lifecycleFunction
