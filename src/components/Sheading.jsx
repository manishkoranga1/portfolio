import React from 'react'
import './CSS/sheading.css'

const Sheading = (props) => {
  return (
    <div className='sb-heading'>
        <p>{props.name}</p>
    </div>
  )
}

export default Sheading