import React from 'react'

function TimeStamp() {
    let time = new Date();
    let date = new Date();
  return (
    <div className=''>
        Date : {date.toLocaleDateString()}
        Time : {date.toLocaleTimeString()}
    </div> 
  )
}

export default TimeStamp