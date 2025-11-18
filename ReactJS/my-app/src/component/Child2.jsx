import React from 'react'
import { useState , useContext } from 'react'
import { Counter } from '../store/Context'

const Child2 = () => {
const {count , setCount} = useContext(Counter)
    
  return (
    <div>
        <h1>Child 2</h1>
        {count}
    </div>
  )
}

export default Child2
