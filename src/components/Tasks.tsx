import Task from './Task';
import style from '../styles/tasks.module.css';
import { TaskInterface } from '../types';
import { ClipboardText } from 'phosphor-react';

interface TasksProps {
  tasks: TaskInterface[];
  removeTask: (id: string) => void;
  changeTaskStatus: (id: string, value: boolean) => void;
}

export function Tasks({tasks, removeTask, changeTaskStatus}: TasksProps) {
  const totalOfTasks = tasks.length;
  const totalOfCompletedTasks = tasks.filter((task) => task.isCompleted).length;

  const getCompletedCounterText = () => {
    if (totalOfTasks > 0) {
      return `${totalOfCompletedTasks} de ${totalOfTasks}`;
    }
    return '0';
  }

  const MainContent = () => {
    if (totalOfTasks > 0) {
      return tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          removeTask={removeTask}
          changeTaskStatus={changeTaskStatus}
        />
      ));
    }
    return (
      <div className={style.noTasks}>
        <ClipboardText
          size={56}
          weight="light"
          color="#333333"
        />
        <p>Você ainda não tem tarefas cadastradas</p>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </div>
    )
  }
  
  return (
    <div className={style.tasksWrapper}>
      <header className={style.header}>
        <div className={style.created}>
          <p>Tarefas criadas</p>
          <span className={style.counter}>{totalOfTasks}</span>
        </div>
        <div className={style.completed}>
          <p>Concluídas</p>
          <span className={style.counter}>
            { getCompletedCounterText() }
          </span>
        </div>
      </header>
      { MainContent() }
    </div>
  )
}
