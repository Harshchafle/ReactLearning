import React from 'react'
import { useState } from 'react'

function ColorBtn() {

  const [color, setColor] = useState("Black")

  
  
  return (
    <div className='w-full h-screen fixed flex  justify-center items-center font-bold' style={{backgroundColor:color}}>
      <div className='fixed flex flex-wrap justify-center  insert-x-0 px-2 gap-3'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-full'>
          <button onClick={ () => setColor("red")} className='outline-none px-4 py-2 rounded-full justify-center' style={{backgroundColor:"red"}}>
            RED
          </button>

        </div>

        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-full'>
          <button onClick={ () => setColor("indigo")}  className='outline-none px-4 py-2 rounded-full' style={{backgroundColor:"indigo"}}>
            INDIGO
          </button>

        </div>

        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-full'>
          <button onClick={ () => setColor("#00008F")}  className='outline-none px-4 py-2 rounded-full' style={{backgroundColor:"#00008F"}}>
            DarkBlue
          </button>

        </div>

        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-full'>
          <button onClick={ () => setColor("cyan")} className='outline-none px-4 py-2 rounded-full' style={{backgroundColor:"cyan"}}>
            Cyan
          </button>

        </div>

        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-full'>
          <button onClick={ () => setColor("yellow")} className='outline-none px-4 py-2 rounded-full' style={{backgroundColor:"#990"}}>
            YELLOW
          </button>

        </div>

        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-full'>
          <button onClick={ () => setColor("white")} className='outline-none px-4 py-2 rounded-full' style={{backgroundColor:"#999"}}>
            White
          </button>
        </div>

        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-full'>
          <button onClick={ () => setColor("#c04000")} className='outline-none px-4 py-2 rounded-full' style={{backgroundColor:"#c04000"}}>
            Mahogany
          </button>
        </div>

        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-full'>
          <button onClick={ () => setColor("#009900")} className='outline-none px-4 py-2 rounded-full' style={{backgroundColor:"#009900"}}>
            Green
          </button>
        </div>

      </div>
    </div>
  )
}

export default ColorBtn