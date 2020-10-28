import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, signin } from './actions'

function App() {

  const counter = useSelector(state => state.counter)
  const isLogged = useSelector(state => state.isLogged)
  const dispatch = useDispatch()

  return (
    <div className="App">
        <button onClick={() => dispatch(signin())}>{isLogged ? "Log Out" : "Log In"}</button>
        <h1>Counter: {counter}</h1>
        <button onClick={() => dispatch(decrement(5))}>-</button>
        <button onClick={() => dispatch(increment(5))}>+</button>


        {isLogged && <h3>Secure zone, for logged in only</h3>}
        
    </div>
  );
}

export default App;
