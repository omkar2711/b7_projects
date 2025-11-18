import React , { useContext } from 'react'
import { Counter } from '../store/Context'


const Child1 = () => {

const {count , setCount} = useContext(Counter)

const increment = () => {
    setCount(count + 1);
}
    
  return (
    <div>
        <h1>Child 1</h1>
        <h1>Count : {count}</h1>
      <button className='border border-1 rounded-md p-4 m-10 w-[150px]' onClick={increment} > Increment </button>

    </div>
  )
}

export default Child1
