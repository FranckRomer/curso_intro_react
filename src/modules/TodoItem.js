import React from 'react'

export default function TodoItem(props) {
  return (
    <li className='TodoItem'>
        <span>C</span>
        <p>{props.text}</p>
        <span>X </span>
    </li>
  )
}

export  {TodoItem}; 