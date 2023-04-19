import React from 'react'
import Task from '../Task'

function RenderTasks({ tasks, updateTasks, deleteTask, editTask, completedSection }) {
    return (
        <div>
            {
                // eslint-disable-next-line array-callback-return
                tasks.map(task => {
                    if (task.completed === completedSection) {
                        return (
                            <Task
                                task={task}
                                key={task.id}
                                updateTasks={updateTasks}
                                deleteTask={deleteTask}
                                editTask={editTask}
                            />
                        )
                    }
                })
            }
        </div>
    )
}

export default RenderTasks