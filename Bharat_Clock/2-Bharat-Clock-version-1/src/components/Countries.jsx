import React from 'react'

const Countries = (props) => {
  
  return (
    <li key={props.country} className='list-group-item'>
      {props.country}
    </li>
  )
}

export default Countries