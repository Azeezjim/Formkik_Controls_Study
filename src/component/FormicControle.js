import React from 'react'

function FormicControle(props) {
  const { control } = props
  switch( control ) {
    case 'input':
    case 'textaria': 
    case 'selecr' : 
    case 'radio' :
    case 'chexkbox' : 
    case 'date' :
      default: return null
    
  }
}

export default FormicControle