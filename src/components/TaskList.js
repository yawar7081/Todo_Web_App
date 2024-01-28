import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import SingleTask from './SingleTask';

function TaskList() {

    // const {task} = useContext(AppContext);
    // console.log(task)

  return (
    <div>
        <AppContext.Consumer>
          {
            state => state.task.map((todo) => <SingleTask
              key={todo.id}
              todo={todo}
            />)
          }
        </AppContext.Consumer>
    </div>
  )
}

export default TaskList