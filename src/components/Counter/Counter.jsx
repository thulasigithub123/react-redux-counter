import React from 'react';
import * as actions from '../../actions/counterActions'
const Counter = props=>{

    const {store}=props
    const incr=()=>{
        store.dispatch(actions.incrAction())
        
    }
    const decr=()=>{
        store.dispatch(actions.decrAction())
    }

    return (
        <>
        <h2>Counter: {store.getState().counter} </h2>

        <button onClick={incr}>+</button>
        <button onClick={decr}>-</button>
        
        </>
    )
}

export default Counter;
