import styles from './Task.module.css'
import {Trash} from 'phosphor-react'
import uncheckedRadioButton from '../assets/unchecked-radio-button.svg'
import checkedRadioButton from '../assets/checked-radio-button.svg'
import { Todo } from '../App'


interface TaskProps{
    todo: Todo;
    onMarkTodoAsDone: (id : string) => void;
    onDeleteTask: (id: string)=> void;
}

export function Task({todo, onMarkTodoAsDone, onDeleteTask}: TaskProps){

    var radio = todo.done ? checkedRadioButton : uncheckedRadioButton

    function handleMarkTaskAsDone() {
        onMarkTodoAsDone(todo.id)
    }

    function handleDeleteTask(){
        onDeleteTask(todo.id);
    }

    return (
        <div className={styles.task}>
            <div className={styles.radio_button_container}>
                <button onClick={handleMarkTaskAsDone}>
                    <img src={radio}/>
                </button>
            </div>
            <div className={todo.done ? styles.strikethrough_text_container : styles.text_container}>
                <p>{todo.content}</p>
            </div>
            <div className={styles.delete_task_button_container}>
                <button onClick={handleDeleteTask}>
                    <Trash size={20}/>
                </button>
            </div>
        </div>
    )
}