import React from 'react'
import Input from './Input'
import Select from './select'

function FormicControl(props) {
  const { control, ...rest } = props
  switch( control ) {
    case 'input':
      return <Input {...rest} />
    case 'textaria': 
    case 'selecr' : 
      return <Select {...rest }/>
    case 'radio' :
    case 'chexkbox' : 
    case 'date' :
      default: return null
    
  } 
}

export default FormicControl