import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import SingleTask from './SingleTask';

function TaskList() {

    const {task} = useContext(AppContext);


  return (
    <div>
        {
            task?.map((todo) => {
                return <SingleTask
                  todo={todo}
                />
            })
        }
    </div>
  )
}

export default TaskList