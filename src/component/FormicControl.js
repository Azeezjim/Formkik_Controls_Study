import React from 'react'
import Input from './input'

function FormicControl(props) {
  const { control, ...rest } = props
  switch( control ) {
    case 'input':
      return <Input {...rest} />
    case 'textaria': 
    case 'selecr' : 
    case 'radio' :
    case 'chexkbox' : 
    case 'date' :
      default: return null
    
  } 
}

export default FormicControl