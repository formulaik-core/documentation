import React from 'react'
import { useColorMode } from '@docusaurus/theme-common'

export default ({ Svg, file, title, description, className = '', role = "img" }) => {
  const { colorMode } = useColorMode()

  return <Svg
    fill={`${colorMode === 'dark' ? 'white' : 'black'}`}
    className={` 
            ${className}         
          w-full`}
    role={role} />
}

