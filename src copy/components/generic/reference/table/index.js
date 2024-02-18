import React from 'react'
import Table from './table.js'
import adaptData from './adaptData/index.js'

export default (props) => {  
  const data = adaptData({
    data: props.data,
    types: props.types,
    isPlain: props.isPlain
  })
  return <Table {...props} data={data} />     
}