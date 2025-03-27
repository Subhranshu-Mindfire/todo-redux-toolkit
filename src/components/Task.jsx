import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { toggleCompletion } from '../feature/tasks/taskSlice'

const Task = ({task}) => {

  const dispatch = useDispatch()

  const handleToggleCompletion = () => {
    dispatch(toggleCompletion(task))
  }
  return (
    <div className='d-flex justify-content-center'>
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
      </div>
    </div>
  )
}

export default Task