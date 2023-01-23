import { useState, ChangeEvent } from 'react';
import './App.css';
import { ITask } from './Interfaces';
import TodoTask from './components/TodoTask';

const App: React.FC = () => {
  const [task, setTask] = useState('');
  const [deadLine, setDeadLine] = useState(0);
  const [todos, setTodos] = useState<ITask[]>([]);

  //to store what the user is writing:
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if(event.target.name === 'task') {
      setTask(event.target.value);
    } 
    if (event.target.name === 'deadline') {
      setDeadLine(Number(event.target.value));
    }
  };

  const addTask = () => {
    const newTask = {
      taskName: task,
      deadLine: deadLine
    };
    setTodos([...todos, newTask]);
    setTask('');
    setDeadLine(0);
    
  };

  const completeTask = (taskNameToDelete: string) => {
    setTodos(todos.filter((task) => {
      return task.taskName !== taskNameToDelete;
    }))
  }


  return (
    <div className="App">
      <div className='header'>
        <div className='inputContainer'>
          <input type='text' name='task' value={task} onChange={handleChange} placeholder='Add a task' />
          <input type='number' name='deadline' value={deadLine} onChange={handleChange} placeholder='Set a deadline' />
        </div>
        <button onClick={addTask}>Add</button>
      </div>

      <div className='todoList'>
        {todos.map((task:ITask, key:number)=>{
            return <TodoTask key={key} task={task} completeTask={completeTask} />
        })}
      </div>
      
    </div>
  )
}

export default App
