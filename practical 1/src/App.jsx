//Q1create a counter application with the following features:
//increment button 
//decrement button
//reset button
//display the count value on screen
import React,{useState} from "react";
export default function App(){
  const [value,setValue]=useState([0]);
  const increment=()=>{
    setValue(value+1)
  }
  const decremnet=()=>{
    setValue(value-1)
  };
  const reset=()=>{
    setValue(value-value)
  };
  return(
    <div>
      <h1>{value}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decremnet}>Decrement</button>
      <button onClick={reset}>Reset</button>

    </div>
  );
}



//Q2 create a react application with the following pages:-
//home
//aboout
//contact
//Implement routing using react router so that navigation between pages works without reloading pages
