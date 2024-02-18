import React from 'react'
import Actual from './actual'
export default ({hideTitle = false}) => <div class={`                     
        px-6                
        flex 
        justify-center`}>
    <div class={`          
          justify-center      
          align-middle                
          md:max-w-5xl
          max-w-md
        `}>
      <h2 className='text-4xl'>{`Quick start 🚀`}</h2>
      <Actual />
    </div>
  </div>