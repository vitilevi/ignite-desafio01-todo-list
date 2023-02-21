import style from '../styles/task.module.css';
import { ChangeEvent } from 'react';
import { TaskInterface } from '../types';
import { Trash } from 'phosphor-react';

export interface TaskProps {
  task: TaskInterface;
  removeTask: (id: string) => void;
  changeTaskStatus: (id: string, value: boolean) => void;
}

export default function Task({task, removeTask, changeTaskStatus}: TaskProps) {
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    changeTaskStatus(
      task.id,
      event.target.checked
    );
  };

  return (
    <div className={style.taskWrapper}>
      <input
        type="checkbox"
        checked={task.isCompleted}
        onChange={handleInputChange}
      />
      <div>
        <p>{task.title}</p>
      </div>
      <button
        type='button'
        aria-label="Remover tarefa"
        onClick={() => removeTask(task.id)}
      >
        <Trash
          size={16}
          color="#808080"
        />
      </button>
    </div>
  )
}
