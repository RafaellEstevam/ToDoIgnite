import { ChangeEvent, FormEvent, useState } from 'react';
import styles from './Form.module.css';
import {PlusCircle} from 'phosphor-react'
import { Todo } from '../App';
import { v4 as uuidv4 } from 'uuid';

interface FormProps{
    onAddTodoList: (todo: Todo) => void;
}

export function Form({onAddTodoList}: FormProps){

    const [newTask, setNewTask] = useState('');

    function buildTodo():Todo{
        return {
            id: uuidv4().toString(),
            done: false,
            content: newTask
        }
    }

    function handleCreateNewTask(event: FormEvent) {
        event.preventDefault(); 
        onAddTodoList(buildTodo());
        setNewTask('')
    }

    function handleChangeTaskInput(event: ChangeEvent<HTMLInputElement>) {
        setNewTask(event.target.value);
    }
    
    return(
        <div>
            <form onSubmit={handleCreateNewTask} className={styles.form}>
                <input type="text" value={newTask} onChange={handleChangeTaskInput} placeholder='Adicione uma nova tarefa'></input>
                <button type="submit">
                    Criar 
                    <PlusCircle size={16}/>
                </button>
            </form>
        </div>
    )
}
