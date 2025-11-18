import React from 'react'
import { increment , decrement , reset , reset100} from '../features/counter/counterSlice'
import { useSelector , useDispatch} from "react-redux";


const Counter = () => {

    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch();

    return (
        <div>
            <h1>Count : {count}</h1>
            <button onClick={ () => dispatch(increment())}>Increment</button>
            <button onClick={ () => dispatch(decrement())}>Decrement</button>
            <button onClick={ () => dispatch(reset())}>Reset</button>
            <button onClick={ () => dispatch(reset100())}>Reset 100</button>
        </div>
    )
}

export default Counter
