import { useState } from 'react'

const TodoForm = ({ addTodo }) => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!title || !category) {
      return
    }
    // Adiciona novo todo
    addTodo(title, category);
    // Limpa os campos do input e select
    setTitle("");
    setCategory("");
  }

  return (
    <section className='todo-form'>
      <h2>Criar tarefa:</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Digite o título' value={title} onChange={(e) => setTitle(e.target.value)} />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">Selecione uma categoria</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Pessoal">Pessoal</option>
          <option value="Estudos">Estudos</option>
        </select>
        <button type='submit'>Criar tarefa</button>
      </form>
    </section>
  )
}

export default TodoForm;