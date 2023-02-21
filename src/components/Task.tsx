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
  }

  return (
    <div className={style.taskWrapper}>
      <input
        type="checkbox"
        onChange={handleInputChange}
      />
      <p>{task.title}</p>
      <Trash
        size={16}
        onClick={() => removeTask(task.id)}
      />
    </div>
  )
}
