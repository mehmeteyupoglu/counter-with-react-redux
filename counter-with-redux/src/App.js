import React from 'react';
import './App.css';
import {useSelector, useDispatch} from "react-redux"
import { increment, decrement } from './actions';

function App() {
  const counter = useSelector(state => state.counter)
  const isLogged = useSelector(state => state.isLogged)
  const dispatch = useDispatch()
  return (
    <div className="App">
      <h1>Counter {counter}</h1>
      <button style = {buttonStyle} onClick={() => dispatch(increment())}>+</button>
      <button style = {buttonStyle} onClick={() => dispatch(decrement())}>-</button>
      {
        isLogged ? <h2>You are logged in.</h2> : <h2>You need to sign in</h2>
      }
      
      
    </div>
  );
}

const buttonStyle = {
  border: "2px solid", 
  borderRadius: "2px", 
  fontSize: "40px", 
  fontFamily: "bold", 
  background: "gray", 
  color: "white", 
}
export default App;
