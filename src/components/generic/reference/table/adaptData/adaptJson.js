export default ({data, }) => {
  const { header, rows} = data
  let ids = []
  rows.forEach(element => {
    const keys = Object.keys(element)
    ids = ids.concat(keys)
  })

  ids = removeDuplicates(ids)

  let _rows = rows.map((row, index) => {
    return {
      columns: data.header.columns.map(column =>{
        const {id} = column
        const item = row[id]
        return item
      })
    }      
  })

  let _data = {
    header, 
    rows: _rows}

  return _data
}

const removeDuplicates = data => data.filter((value, index) => data.indexOf(value) === index)