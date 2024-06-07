import React from 'react'

const TaskComponents = ({data,addTask,deleteTask,editTask,id,updateTask}) => {
    return (
        <div>
            {
                data.map((i, index) => {
                    return (
                        <div key={index}>{i} <button onClick={()=>editTask(index)}>Edit</button> <button onClick={()=>deleteTask(index)}>Delete</button></div>
                    )
                })
            }
            <button onClick={id ? updateTask : addTask}>{id ? "Update" : "Add"} Task</button>
        </div>
    )
}

export default TaskComponents
