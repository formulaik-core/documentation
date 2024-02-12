import React from 'react'
import Badge from '../components/badge.js'
import TypeView from '../components/type.js'

export default  ({data, types}) => {
  const { header, rows} = data

  let _rows = rows.map(row => {
      const { columns } = row      
      const _columns = columns.map((column, columnIndex) => {
      
        if(!column){
          return  {
            id: columnIndex,
            value:  <span></span>
          }
        }

        const _type = typeof column
        
        switch(_type)
        {
          case 'string': {
            return {
              id: columnIndex,
              value: column
            }
          }
          default:{
            const {type} = column
            switch(type){
              case 'boolean':{
                return {
                  id: columnIndex,
                  value:  <Badge name={column.value ? "True": "False" } />
                }
              }
              case 'values':{
                return {
                  id: columnIndex,
                  value: column.value.map(v => <Badge name={v} />)
                }
              }
              case 'element':{
                const Element = column.value
                return {
                  id: columnIndex,
                  value:  <Element />
                }
              }
              case 'type':{
                const {value} = column
                let item = types.items.filter(a => a.id === value)
                if(!item || !item.length){
                  break
                }

                item = item[0]              
                const url = `${item.path}`
                const { mode } = column
                let label = item.name
                switch(mode){
                  case 'array':{
                    label = `[${item.name}]`
                  }break
                  default: break
                }
                return {
                  id: columnIndex,
                  value: <TypeView 
                              name={label} 
                              url={url}
                              tooltip={item.description} />
                }
              }
              default: break
            }
          }
            break
        }
        return column
    })    

    return {...row, columns: _columns}
  })
  _rows = _rows.filter(a=>a)
  let _data = {
    header, 
    rows: _rows}

  return _data
}




