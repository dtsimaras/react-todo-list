import React from 'react'
import Task from '../Task'

function RenderTasks({ tasks, updateTasks, deleteTask, completedSection }) {

    const filteredTasks = tasks.filter(task => task.completed === completedSection)
    return (
        <div>
            {
                filteredTasks.map(task => {
                    return (
                        <Task
                            task={task}
                            key={task.id}
                            updateTasks={updateTasks}
                            deleteTask={deleteTask}
                        />
                    )
                })
            }
        </div>
    )
}

export default RenderTasks