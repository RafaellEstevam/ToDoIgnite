import { Form } from './components/Form';
import { Header } from './components/Header';
import { Tasks } from './components/Tasks';
import styles from './App.module.css'
import './global.css';
import { useState } from 'react';


export interface Todo{
  id: string;
  done: boolean;
  content: string;
}

function App() {
  const [todos, setToDoList]= useState<Todo[]>([]);

  function addTodoList(todo: Todo){
    setToDoList([...todos, todo])
  }

  function markTodoAsDone(id: string){
    const updatedTodoList = todos.map(todo => {
      if (todo.id === id){
        todo.done = !todo.done;
      } return todo;
    })

    setToDoList(updatedTodoList);
  }

  function deleteTask(taskId: string){
    const updatedTodoList = todos.filter(todo => todo.id !== taskId);
    setToDoList(updatedTodoList);
  }

  return (
    <div>
      <Header/>
      <main>
          <Form onAddTodoList={addTodoList}/>
          <section className={styles.tasks_section}>
            <Tasks todos={todos} onMarkTodoAsDone={markTodoAsDone} onDeleteTask={deleteTask} />
          </section>
      </main>      
    </div>
  )
}

export default App
