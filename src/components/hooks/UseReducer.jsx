import React, { useReducer } from 'react'
import './Style.css'

const ACTION = {
  increment : "INCREMENT",
  decrement : "DECREMENT"
}

const initialState = 0;

const reducer = (state, action) => {

switch (action.type) {
  case ACTION.increment:
    return state + 1;

  case ACTION.decrement:
    return state > 0 ?state - 1: state;
    default:
      return state;
    
}

}


const UseReducer = () => {

 const[state, dispatch] = useReducer(reducer, initialState)

  return (
    <>
      <div className="center_div">
        <p>{state}</p>
        <div className="button2" onClick={() => dispatch({type:ACTION.increment})}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            INCR
        </div>

        <div className="button2" onClick={() => dispatch({type:ACTION.decrement})}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            DECR
        </div>
      </div>
    </>
  )
}

export default UseReducer