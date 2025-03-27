import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { toggleCompletion, deleteTask, editTask } from '../feature/tasks/taskSlice'
import { toast } from 'react-toastify'

const Task = ({ task }) => {
  const [isEditing, setIsEditing] = useState(false)
  const [newTaskName, setTaskNewName] = useState(task.taskName);

  const dispatch = useDispatch()

  const handleToggleCompletion = () => {
    dispatch(toggleCompletion(task))
    toast.success('Task Completed', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light"
    });
  }

  const handleDeleteClick = () => {
    dispatch(deleteTask(task))
    toast.success('Task Deleted Successfully', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light"
    });
  }

  const handleToggleEdit = () => {
    setIsEditing(!isEditing)
  }

  const handleEditClick = () => {
    if (newTaskName.length == 0) {
      toast.error('Task Can Not Be Empty', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light"
      });
    }
    else{
      dispatch(editTask({task, newTaskName}))
      setIsEditing(false)
      toast.success('Task Edited Successfully', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light"
      });
    }
  }

  return (
    <div className='d-flex justify-content-center'>
      {
        isEditing ? (
          <div className='d-flex align-items-center w-50 bg-light shadow p-2 rounded-3 mt-3 g-3'>
            <div className="fs-2 w-100">
              <input type="text" className="form-control fs-2" value={newTaskName}
                onChange={(e) => setTaskNewName(e.target.value)}
                placeholder="Enter new task name" />
            </div>
            <div onClick={() => handleEditClick()} className='btn btn-lg btn-outline-primary mx-2'>Save</div>
            <div onClick={() => handleToggleEdit()} className=' btn btn-lg btn-outline-secondary text-center'> Cancel</div>
          </div>
        ) : (
          <div className='row align-items-center w-50 bg-light shadow p-2 rounded-3 mt-3 px-3'>
            <div className="fs-2 col-md-9"
              style={{
                textDecoration: task.completed ? 'line-through' : 'none',
                color: task.completed ? 'gray' : 'black',
              }}>
              {task.taskName}
            </div>
            <div onClick={handleToggleCompletion} className="btn fs-3 col-md-1">
              {task.completed ? <i className="fa-solid fa-circle-check" style={{ color: "greenyellow" }}></i> : <i className="fa-solid fa-circle-check" style={{ color: "gray" }}></i>}
            </div>
            <div onClick={() => handleToggleEdit()} className='btn border-0 fs-3 col-md-1'><i className="fa-solid fa-pen" style={{ color: " #FFD43B" }}></i></div>
            <div onClick={handleDeleteClick} className='btn border-0 fs-3 col-md-1'> <i className="fa-solid fa-trash" style={{ color: "#ff0000" }}></i></div>
          </div>
        )
      }
    </div>
  )
}

export default Task