import React, { useState } from 'react'
import '../componentscss/Test.css'


function Test() {

  let [count, setCount] = useState(1);

  const incCount = () => {
    if(count < 10){
      setCount(count + 1);
      // setCount( (count) => count+1) // isse counter updated value assigned ho jati
    } else {
      alert("Count cannot be more than 10");
    }
    console.log(count);
  }

  const decCount = () => {
    if(count > 1){
      setCount(count - 1);
    } else {
      alert("Count cannot be less than 1");
    }
    console.log(count);
  }
  return (
    <div className="counter-container">
       <button className="counter-button" onClick={decCount}>-</button>
       <h1 className="counter-value">{count}</h1>
       <button className="counter-button" onClick={incCount}>+</button>
    </div>
  )
}

export default Test