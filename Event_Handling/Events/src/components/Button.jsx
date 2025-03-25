import React from 'react'

function Button() {
  return (
    <div>
        <input type='text' placeholder='type here' className='button' onChange={(event) => console.log(event.target.value)}></input>

        <button onClick={(event) => console.log(event.target)}>click it</button>
    </div>
  )
}


export default Button