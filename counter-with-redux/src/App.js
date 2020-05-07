import React from 'react';
import './App.css';
import {useSelector, useDispatch} from "react-redux"
import {increment, decrement, login} from "./actions"


function App() {
  const counter = useSelector(state => state.counter)
  const isLogged = useSelector(state => state.isLogged)
  const dispatch = useDispatch()

  return (
    <div className="App">
      <h1>Counter : {counter}</h1>
        {
          isLogged ? 
          <h2>You are signed in. You can play with the counter. </h2>: 
          <h2>You need to sign in to play with the counter.</h2>
        }
      <button 
      style={isLogged ? buttonStyle : disable} 
      onClick={() => dispatch(increment())}>
      +
      </button>
      
      <button 
      style={isLogged ? buttonStyle : disable} 
      onClick={() => dispatch(decrement())}>
      -
      </button>
      
      <br/>
      {
        isLogged ? 
        <button style= {buttonStyle} onClick={() => dispatch(login())}> LOGOUT</button> : 
        <button style= {buttonStyle} onClick={() => dispatch(login())}> LOGIN</button> 
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

const disable = {
  border: "2px solid", 
  borderRadius: "2px", 
  fontSize: "40px", 
  fontFamily: "bold", 
  background: "#b5173a", 
  color: "white", 
  pointerEvents: "none", 
}
export default App;
