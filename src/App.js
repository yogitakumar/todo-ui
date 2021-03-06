import { useState } from 'react';
import Header from './components/Header/Header'
import TaskList from './components/TaskList/TaskList'
import './App.css';

function App() {
  const [tasks, setTasks] = useState([
    { id: "001", text: "Buy cat food", completed: false, date: "2019-09-18" },
    { id: "002", text: "Wash dishes", completed: true, date: "2019-09-24" },
    { id: "003", text: "Help to kids to complete their art&craft", completed: false, date: "2019-09-27" },
    { id: "004", text: "Buy a milk", completed: true, date: "2019-09-20" },
    { id: "007", text: "Mending broken table", completed: false, date: "2019-09-22" },
    { id: "008", text: "Paint store room", completed: false, date: "2019-09-19" }
  ])
  const deleteTask = id => {
    const updatedTasks = tasks.filter(task => task.id !== id)
    setTasks(updatedTasks)
  }

  const addTask = text => {
    const newTask = {
      text: text,
      completed: false,
      date: "2021-12-01",
      id: "005"
    }

    const updatedTasks = [...tasks, newTask]
    setTasks(updatedTasks)
  }

  const incomplteTasks = tasks.filter(tasks => !tasks.completed)
  const completeTasks = tasks.filter(tasks => tasks.completed)
  return (
    <div className="App">
      <Header taskCount={incomplteTasks.length} addTask={addTask} />
      <main className="all-tasks">
        <TaskList deleteTask={deleteTask} tasks={incomplteTasks} status="incomplete" />
        <TaskList deleteTask={deleteTask} tasks={completeTasks} status="complete" />
      </main>
    </div>
  );
}

export default App;
