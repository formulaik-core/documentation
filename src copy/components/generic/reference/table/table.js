import React from 'react'

export default (props) => {
  const { data, } = props  
  const { header, rows} = data

  return <table>
     <thead>
     {      
        header.columns.map(column => {
          return (<td key={column.id} className='font-bold text-center'> {column.label} </td>)
        })            
     }
    </thead>
    <tbody>
    {
      rows.map(row => {
        return <tr key={row.id}>
            {
              row.columns.map(column => {
            //  return <i>{column.value}</i>
                return <td key={column.id} className=''> 
                  {column.value} 
                </td>
              })
            }
          </tr>
      })
    }
    </tbody>
    </table>
}
