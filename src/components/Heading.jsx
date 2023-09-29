import React from 'react'
import './CSS/heading.css'

const Heading = (props) => {
  return (
    <div className='Heading'>
        <h1>{props.name1} <span style={{color: "orange"}}>{props.name2}</span></h1>
    </div>
  )
}

export default Heading