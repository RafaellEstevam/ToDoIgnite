import { Task } from './Task'
import { TaskListHeader } from './TaskListHeader';
import styles from './Tasks.module.css'
import clipboard from '../assets/Clipboard.png';
import { Todo } from '../App';

interface TasksProps{
    todos: Todo[];
    onMarkTodoAsDone: (id : string) => void;
    onDeleteTask: (id : string) => void;
}

export function Tasks({todos, onMarkTodoAsDone, onDeleteTask}: TasksProps) {

    var isTaskListEmpty = todos.length === 0;
    var totalTasks = todos.length;
    var completedTasks = todos.filter(todo => todo.done).length;

    if (isTaskListEmpty){
        return(
            <div>
                <TaskListHeader totalTasks={totalTasks} completedTasks={completedTasks}/>
                <div className={styles.empty_task_list_message_container}>
                    <img src={clipboard} alt="clipboard image"/>

                    <div className={styles.empty_task_list_message}>
                        <strong>Você ainda não tem tarefas cadastradas</strong>
                        <p>Crie tarefas e organize seus itens a fazer</p>
                    </div>
                </div>
            </div>
        )
    }else{
        return(
            <div>
                <TaskListHeader totalTasks={totalTasks} completedTasks={completedTasks}/>
                <div className={styles.task_list_container}>
                    {todos.map(todo => <Task key={todo.id} todo={todo} onMarkTodoAsDone = {onMarkTodoAsDone} onDeleteTask={onDeleteTask}/> )}
                </div>
            </div>
        )
    }
}


