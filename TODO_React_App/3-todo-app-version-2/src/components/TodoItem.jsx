import React from 'react'
import Task from './Task'

function TodoItem({tasks}) {

  
  return (
    <>
        <div className='items-container'>
          <Task todoname="go to school" date='2/2/2003'/>
        </div>
    </>
  )
}

export default TodoItem