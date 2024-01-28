import React, { useContext, useState } from 'react'
import { AppContext } from '../context/AppContext';

function TaskForm() {



    const [newTask,setNewTask] = useState("");
    const {addTask} = useContext(AppContext);

  return (
    <form onSubmit={(e) => {
        e.preventDefault();
        addTask(newTask);
        setNewTask("");
    }}>
        <input
            type='text'
            value={newTask}
            placeholder='Enter Your Todo'
            onChange={(e) => {
                setNewTask(e.target.value)
            }}
        />
        <button>Add</button>
    </form>
  )
}

export default TaskForm