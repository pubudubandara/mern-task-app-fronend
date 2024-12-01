import { FaEdit,FaCheckDouble,FaRegTrashAlt } from "react-icons/fa";
import React from 'react'

const Task = ({task,index,deleteTask,getSingleTask,setToCompleted}) => {
  return (
    <div className={task.completed ? "task completed" : "task"}>
      <p>
        <b>{index +1}. </b>
        {task.name}
      </p>
      <div className="task-icons">
        <FaCheckDouble color="green" onClick={()=>{
          setToCompleted(task)
        }}/>
        <FaEdit color="purple" onClick={()=>{
            getSingleTask(task)
        }}/>
        <FaRegTrashAlt color="red" onClick={()=>{
          deleteTask(task._id)
        }}/>
      </div>
    </div>
  )
}

export default Task
