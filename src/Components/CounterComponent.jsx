import React from 'react'
import { DECREMENT, INCREMENT } from '../Redux/actions'
import { useDispatch, useSelector} from 'react-redux'

const CounterComponent = () => {
    const count = useSelector((state)=>state.count)
    const dispatch = useDispatch()
  return (
    <div>
      <p>counter exampal</p>
      <h3>count is : {count}</h3>
      <button onClick={()=>dispatch({type:INCREMENT})}>Add</button>
      <button onClick={()=>dispatch({type:DECREMENT})}>remove</button>
    </div>
  )
}

export default CounterComponent
