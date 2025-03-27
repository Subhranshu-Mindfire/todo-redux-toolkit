import React from 'react'
import { useSelector } from 'react-redux'
import Task from './Task'
import AddTask from './AddTask'
import { ToastContainer } from 'react-toastify'


const TaskList = () => {
  
  const taskList = useSelector((state) => state.tasks.tasks)
  return (
    <>
      <div>
        <ToastContainer />
        <div>
          <h1 className='mt-5 pt-5 text-center'>Todo List</h1>
          <div className='d-flex justify-content-center fs-4 mt-5'>
            <AddTask/>
          </div>
          <div className='mt-5'>
            {taskList.map((task) => (
              <Task
                key={task.id}
                task={task}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default TaskList