import React from 'react'
import { useColorMode } from '@docusaurus/theme-common'
import Drawio from '@theme/Drawio'


export default (props) => {
  const {content} = props

  const { colorMode } = useColorMode()
  // const SVG = colorMode === 'dark' ? dark : light
  return <Drawio content={content} border={0} {...props}/>
}


// Sample: import simpleGraph from '!!raw-loader!/static/diagrams/source/main.drawio';
// https://github.com/xiguaxigua/docusaurus-plugin-drawio?tab=readme-ov-file

// import Drawio from '@site/src/components/generic/drawio'
// import simpleGraph from '!!raw-loader!/static/diagrams/source/main.drawio';

{/* <Drawio content={simpleGraph} border={0} /> */}