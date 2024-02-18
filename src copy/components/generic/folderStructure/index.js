import React from 'react'
import { useColorMode } from '@docusaurus/theme-common'
import FolderTree from 'react-folder-tree'
import 'react-folder-tree/dist/style.css'

export default (props) => {
  const { data, } = props
  const { isDarkTheme } = useColorMode()

  return <FolderTree
    data={data}
    showCheckbox={false}
    readOnly
    {...props}
  />
}


/*
<FolderStructure
      data={{
  name: 'models',  
  isOpen: true, 
  children: [
    { 
        name: 'classA',  
        children: [
          {
            name: 'class',            
            children: [
              { name: 'index.js',         
              },
              { name: 'features.js', },
            ],
          },
          {
            name: 'functions',            
            children: [
              { name: 'index.js',         
              },              
            ],
          },
          {
            name: 'triggers',            
            children: [
              { name: 'index.js',         
              },              
            ],
          },
        ]
    },  
    {
       name: 'classB',  
        children: [
          {
            name: '...', 
          }]
    }  
  ],
}}/>
*/