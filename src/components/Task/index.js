import React from 'react'
import './task.css'
import deleteIcon from 'assets/icons/icons8-delete.svg'

function Task({ task, updateTasks, deleteTask}) {

    const handleChange = (event) => {
        updateTasks(task.id, event.target.checked)
    }

    const handleDelete = () => {
        deleteTask(task.id)
    }

    return (
        <div className="task">
            <div>
                <span style={task.completed ? { textDecoration: "line-through" } : {}}>
                    {task.text}
                </span>
                <input
                    type="checkbox"
                    onChange={handleChange}
                    checked={task.completed}
                />
            </div>
            <div>
                <img
                    src={deleteIcon}
                    alt='delete icon'
                    onClick={handleDelete}
                />
            </div>
        </div>
    )
}

export default Task