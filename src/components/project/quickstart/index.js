import React from 'react'
import Actual from './actual'
export default ({ hideTitle = false }) => <div class={`                     
        flex 
        justify-center`}>
    <div class={`          
          justify-center      
          align-middle                
          md:max-w-5xl
          max-w-sm
          px-4   
        `}>
      <h2 className='text-4xl'>{`Quick start with React JS 🚀`}</h2>
      <p className={`text-lg italic`}>
            Let's build a login form with email and password inputs.
          </p>
      <Actual />
    </div>
  </div>