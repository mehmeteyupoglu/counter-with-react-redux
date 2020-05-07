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
      <h1> Counter {counter}</h1>
      <button style = {isLogged ? buttonStyle : disable} 
      onClick={() => 
      dispatch(increment())}>
      +
      </button>
      
      <button style = {isLogged ? buttonStyle : disable } 
      onClick={() => 
      dispatch(decrement())}>
      -
      </button>
      {
        isLogged ? <h1>You are online. Now, you can play with the counter </h1> : <h1>You need to sign in to play with the counter</h1> 
      }
      <button style = {buttonStyle} onClick={() => dispatch(login())}>
      {
        isLogged ? "LOGOUT" : "LOGIN"
      }</button> 
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
