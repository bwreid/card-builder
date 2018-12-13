import React from 'react'
import { Text } from 'informed'

export default ({ component: Component = Text, name }) => {
  const field = name.toLowerCase().split(' ').join('-')
  return <label className='label'>
    { name }
    <div className='control'>
      <Component id={field} className='input' field={field} />
    </div>
  </label>
}
