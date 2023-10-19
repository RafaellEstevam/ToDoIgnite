import styles from './TaskListHeader.module.css'


interface TaskListHeaderProps{
    totalTasks: number;
    completedTasks: number;
}

export function TaskListHeader({totalTasks, completedTasks}: TaskListHeaderProps){
    return(
        <div>
            <div className={styles.header}>
                <div className={styles.info_header_container}>
                    <strong className={styles.created_tasks}>Tarefas criadas</strong>
                    <span>{totalTasks}</span>
                </div>

                <div className={styles.info_header_container}>
                    <strong className={styles.completed_tasks}>Tarefas concluídas</strong>
                    <span>{completedTasks} de {totalTasks}</span>
                </div>  
            </div>
        </div>
    )
}

