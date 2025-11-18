import React from 'react'
import { connect } from 'react-redux'

const Counter = ({count , onIncrement, onDecrement}) => {
  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={onIncrement}>Increment</button>
      <button onClick={onDecrement}>Decrement</button>
    </div>
  )
}

const mapStateToProps = (state) => ({
    count : state.count
});

const mapDispatchtoProps = (dispatch) => ({
   onIncrement : () => dispatch({type : 'INCREMENT'}) ,
   onDecrement : () => dispatch({type : 'DECREMENT'}) 
});

export default connect(mapStateToProps , mapDispatchtoProps)(Counter);
