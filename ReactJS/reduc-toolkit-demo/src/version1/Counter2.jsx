import React from 'react'
import { useSelector , useDispatch} from "react-redux";
import { increment , decrement , reset , reset100} from '../features/counter/counterSlice'

const Counter2 = () => {

     const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch();
  return (
    <div>
     <h1> Count From version1 : {count}</h1>
      <button onClick={ () => dispatch(decrement())}>Decrement</button>
    </div>
  )
}

export default Counter2
