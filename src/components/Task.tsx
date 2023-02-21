import style from '../styles/task.module.css';
import { ChangeEvent } from 'react';
import { TaskInterface } from '../types';
import { CheckCircle, Circle, Trash } from 'phosphor-react';

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

  const getCheckBox = () => {
    const iconSize = 24;
    if (task.isCompleted) {
      return <CheckCircle className="checked" size={iconSize} color="#5E60CE" weight="fill" />;
      }
    return <Circle className="circle" size={iconSize} color="#4EA8DE" />;
  }

  return (
    <div className={style.taskWrapper}>
      <label>
        <input
          type="checkbox"
          checked={task.isCompleted}
          onChange={handleInputChange}
        />
        { getCheckBox() }
        <div>
          <p>{task.title}</p>
        </div>
      </label>
      <button
        type='button'
        aria-label="Remover tarefa"
        onClick={() => removeTask(task.id)}
      >
        <Trash
          size={18}
          color="#808080"
        />
      </button>
    </div>
  )
}
