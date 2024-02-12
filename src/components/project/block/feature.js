import React from 'react'
import { useColorMode } from '@docusaurus/theme-common'

export default ({ Svg, title, description, url }) => {
  const { isDarkTheme } = useColorMode()

  return (
    <div className={'col mb-16 md:mb-0 px-10'}>
      <div className="text-center ">
      
        <Svg
          fill={`${isDarkTheme ? 'white' : 'black'}`}
          className={`               
          px-10
          w-[160px]
          h-[120px]
          md:h-[160px]`}
          role="img" />
      </div>
      <div className="text-center">     
          <Content 
            title={title} 
            url={url} 
            description={description} />                            
      </div>
    </div>
  )
}

const Content = ({title, description, url}) => {
  return <>
   {url && <><a href={`${url}`}           
                  className="
                  anakcss-affordance-base          
                hover:text-customc-main          
                  no-underline                       
                  text-inherit                                               
                  ">
  <h3>{title}</h3>        
        </a>
        <p>{description}</p>
        </>
        }
        {!url && <>
          <h3>{title}</h3>                
        <p>{description}</p>
        </>}
        </>
}