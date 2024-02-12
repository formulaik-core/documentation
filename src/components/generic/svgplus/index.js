import React from 'react'
import { useColorMode } from '@docusaurus/theme-common'

export default ({ light, dark, 
  className = '', 
  role = "img" }) => {

  const { colorMode } = useColorMode()
  const SVG = colorMode === 'dark' ? dark : light
  return <SVG
    // fill={`${isDarkTheme ? 'white' : 'black'}`}
    className={` 
            ${className}         
          w-full`}
    role={role} />
}
