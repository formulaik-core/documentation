import React from 'react'

export default (props = {}) => {
  const { name, url  } = props
  
  return <div className='
          text-slate-600
          border                     
          rounded-full
          text-xs
          px-2 
          py-1            
          anakcss-affordance-base
          hover:border-customc-main                     
          hover:text-customc-main                                
          '>
              <a href={`${url}`}
                  target="_blank"
                  className="no-underline 
                      hover:no-underline 
                      decoration-customc-main                                                 
                      ">
                  <span className='
                      text-slate-600            
                      text-xs            
                      hover:text-customc-main                                
                      '>
                      {`${name}`}
                  </span>
              </a>
          </div>
}

