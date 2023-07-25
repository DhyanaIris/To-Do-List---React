import React from 'react'

const Todo = ({todo}) => {
  return (
    <section className='todo'>
      <section className='content'>
        <p>{todo.text}</p>
        <p className='category'>({todo.category})</p>
      </section>
      <section>
        <button>Completar</button>
        <button>x</button>
      </section>
    </section>
  )
}

export default Todo