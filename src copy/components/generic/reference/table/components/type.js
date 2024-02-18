import React from 'react'

export default (props = {}) => {
  const { name, url, tooltip  } = props  
  return <div className='
            has-tooltip                                
          '>
            {tooltip && <span className={`
                tooltip
                bg-slate-600
                text-slate-100
                rounded-full
                shadow-lg 
                px-4 
                p-2  
                -mt-12
                anakcss-affordance-base       
            `}>{tooltip}</span>
            }        
              <a href={`${url}`}           
                  className="
                  anakcss-affordance-base          
                hover:text-customc-main          
                  no-underline 
                      
                      decoration-customc-main                                                 
                      ">
                  <span className='                                                        
                      hover:text-customc-main                                
                      '>
                      {`${name}`}
                  </span>
              </a>
          </div>
}

