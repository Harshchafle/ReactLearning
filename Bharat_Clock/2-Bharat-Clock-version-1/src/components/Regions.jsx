import React from 'react'
import Countries from './Countries';


function Regions(props) {

      const { regions } = props; // Destructuring for cleaner access 
      // first pass props from the parent component and then access it to the child component by writing it in the paranthesis of the compponent and then destructure it by above way

    
  return (
    <>

        {
            regions == 0 ?<h1>Regions are not set</h1>: 
                <ul className='list-group'>
                    {regions.map((country) => (
                        <Countries key={country} country={country}/>
                    ))}
                </ul>
        }

        

    </>
  )
}

export default Regions