import React from 'react';
import * as actions from '../../actions/EvenCounterActions'
const EvenCounter = props=>{

    const {store}=props

    const incr=()=>{
        store.dispatch(actions.evenIncrAction())
        
    }
    const decr=()=>{
        store.dispatch(actions.evenDecrAction())
    }

    return (
        <>
        <h2>Even Counter: {store.getState().evenCounter}  </h2>

        <button onClick={incr}>+</button>
        <button onClick={decr}>-</button>
        
        </>
    )
}

export default EvenCounter;
