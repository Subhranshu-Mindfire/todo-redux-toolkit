import React, { useState } from 'react'

const Task = ({task}) => {
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
      </div>
    </div>
  )
}

export default Task