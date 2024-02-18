import fill from './fill.js'
import adaptJson from './adaptJson.js'

export default  ({data, types, isPlain }) => {
  if(isPlain){
    return fill({data, types})
  }

  const _data = adaptJson({data, })
  return fill({data: _data, types})  
}

