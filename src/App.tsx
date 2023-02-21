import defaultTasks from './data';
import { Header } from "./components/Header";
import { TaskInput } from "./components/TaskInput";
import { Tasks } from "./components/Tasks";
import { useState } from 'react';
import { TaskInterface } from './types/index';

function App() {
  const [tasks, setTasks] = useState<TaskInterface[]>(defaultTasks);

  const addTask = (task: TaskInterface) => setTasks([...tasks, task]);
  const removeTask = (id: string) => setTasks(tasks.filter((task) => task.id !== id));
  const changeTaskStatus = (id: string, value: boolean) => setTasks(
    tasks.map((task) => {
      if (task.id === id) {
        task.isCompleted = value;
      }
      return task;
    })
  );

  return (
    <div className="App">
      <Header />
      <TaskInput
        addTask={addTask}
      />
      <Tasks
        tasks={tasks}
        removeTask={removeTask}
        changeTaskStatus={changeTaskStatus}
      />
    </div>
  );
}

export default App;
