import style from '../styles/taskInput.module.css';
import { PlusCircle } from 'phosphor-react';
import { FormEvent, useEffect, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { TaskInterface } from '../types/index';

interface TaskInputProps {
  addTask: (task: TaskInterface) => void;
};

export function TaskInput({addTask}: TaskInputProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [])

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (inputRef.current) {
      addTask({
        id: uuidv4(),
        title: inputRef.current.value,
        isCompleted: false
      });
      inputRef.current.value = '';
    }
  };

  return (
    <form
      className={style.taskInputWrapper}
      onSubmit={handleSubmit}
    >
      <input
        ref={inputRef}
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
