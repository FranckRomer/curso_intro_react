import React from 'react'

export default function TodoList(props) {
  return (
      
    <div>
      <ul className='TodoList'>
          {props.children}
      </ul>
    </div>
  )
}

export  {TodoList};
