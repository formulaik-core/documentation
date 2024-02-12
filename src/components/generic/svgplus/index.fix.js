import React from 'react'
import { useColorMode } from '@docusaurus/theme-common'

// import callerPath from 'caller-path'
// import URL from 'url'
// import { dirname } from 'path'
// const __filename = URL.fileURLToPath(import.meta.url)
// const __dirname = dirname(__filename)

// import FFE from '../../../../static/diagrams/light/main.svg'

export default ({ name, 
  className = '', 
  role = "img" }) => {
    // return <FFE />
  const { colorMode } = useColorMode()
  const sub = colorMode
  const _path = `@site/static/diagrams/${sub}/${name}.svg`
  let filePath = `../../../../static/diagrams/${sub}/${name}.svg`
  // const ce = getFileCallerURL()
  // filePath = path.resolve(__dirname, filePath)
  // filePath =`${filePath}`
  // console.log('dirname', __dirname, 'ce', ce, filePath)
  // filePath = `static/diagrams/${sub}/${name}.svg`
  const File = require(_path).default

  return <File
    // fill={`${isDarkTheme ? 'white' : 'black'}`}
    className={` 
            ${className}         
          w-full`}
    role={role} />
}

const getFileCallerURL = () => {
  const error = new Error()
  const stack = error.stack?.split('\n')
  const data = stack[3]
  const filePathPattern = new RegExp(`(file:[/]{2}.+[^:0-9]):{1}[0-9]+:{1}[0-9]+`)
  const result = filePathPattern.exec(data)
  let filePath = ''
  if (result && (result.length > 1)) {
    filePath = result[1]
  }
  return filePath
}

