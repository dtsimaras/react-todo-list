import React from 'react'
import './task.css'
import deleteIcon from 'assets/icons/icons8-delete.svg'
import editIcon from 'assets/icons/icons8-edit.svg'
function Task({ task, updateTasks, deleteTask, editTask }) {

    const handleChange = (event) => {
        updateTasks(task.id, event.target.checked)
    }

    const handleDelete = () => {
        deleteTask(task.id)
    }

    const handleEdit = () => {
        editTask(task.id)
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
            <div id="actions">

                <img
                    src={editIcon}
                    alt='edit icon'
                    onClick={handleEdit}
                />
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