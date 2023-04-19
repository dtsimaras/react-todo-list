import { useState } from 'react'
import './App.css';

import RenderTasks from './components/RenderTasks';

const initialTasks = [
  { id: 1, text: 'Go shopping', completed: false },
  { id: 2, text: 'Work out', completed: false },
  { id: 3, text: 'See the doctor', completed: true }
]

let id = initialTasks.length

function App() {
  const [tasks, setTasks] = useState(initialTasks)

  // Create Task
  const handleSubmit = (event) => {
    event.preventDefault()
    const text = event.target[0].value

    const newTask = {
      id: ++id,
      text: text,
      completed: false
    }
    const newTasks = [...tasks, newTask]
    // tell react to update state & rerender
    setTasks(newTasks)
  }

  const updateTasks = (taskId, completed) => {
    const updatedTasks = tasks.map(task => {
      if (task.id === taskId) {
        task.completed = completed
      }
      return task
    })
    setTasks(updatedTasks)
  }

  const deleteTask = (taskId) => {
    const filteredTasks = tasks.filter(task => task.id !== taskId)
    setTasks(filteredTasks)
  }

  const editTask = () => { }
  // TODO: Implement
  const endEditTask = (taskId, text) => {

    //When edit is done
    const filteredTasks = tasks.filter(task => task.id !== taskId)
    const editedTask = tasks.filter(task => task.id === taskId)
    editedTask.text = text
    setTasks([...filteredTasks, editedTask])
  }

  const handleShowCompleted = (event) => {
    const checked = event.target.checked
    const completed = document.getElementById('completed-list')
    completed.style.display = checked ? 'block' : 'none'
  }

  return (
    <div className='App'>

      <h1 className='app-title'>My Todo List</h1>

      <div className="block" id='options'>
        <h2 className='section-header'>OPTIONS</h2>
        <hr />
        <label htmlFor="show-completed">Show completed</label>
        <input name='show-completed' type="checkbox" onClick={handleShowCompleted} />
      </div>

      <div className="block" id="add-item">
        <h2 className='section-header'>ADD ITEM</h2>
        <hr />
        <form onSubmit={handleSubmit}>
          <input type="text" name="task" />
          <button id='add-btn'>Add</button>
        </form>
      </div>

      <div className="block">
        <h2 className='section-header'>TODO</h2>
        <hr />
        <RenderTasks
          tasks={tasks}
          updateTasks={updateTasks}
          deleteTask={deleteTask}
          editTask={editTask}
          completedSection={false}
        />
      </div>

      <div className="block" id="completed-list">
        <h2 className='section-header'>COMPLETED</h2>
        <hr />
        <RenderTasks
          tasks={tasks}
          updateTasks={updateTasks}
          deleteTask={deleteTask}
          editTask={editTask}
          completedSection={true}
        />
      </div>

    </div >
  )
}

export default App;
