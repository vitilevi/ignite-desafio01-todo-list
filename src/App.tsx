import { Header } from "./components/Header";
import { TaskInput } from "./components/TaskInput";
import { Tasks } from "./components/Tasks";

function App() {
  return (
    <div className="App">
      <Header />
      <TaskInput />
      <Tasks />
    </div>
  );
}

export default App;
