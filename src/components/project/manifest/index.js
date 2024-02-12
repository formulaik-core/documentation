import React from 'react'
import Actual from './actual'

export default (props) => {
  return <div className={`             
        `}>
    <div class={`
        
        px-6
        md:px-6      
        pt-6`}>
      <div class={`
        
        `}>
      </div>
      <Actual {...props}/>
    </div>
  </div>
}