import { PlusCircle } from 'phosphor-react';
import style from '../styles/taskInput.module.css';

export function TaskInput() {
  return (
    <form className={style.taskInputWrapper}>
      <input
        placeholder="Adicione uma nova tarefa"
      />
      <button>
        Criar
        <PlusCircle
          size={16}
          weight="bold"
        />
      </button>
    </form>
  );
}
