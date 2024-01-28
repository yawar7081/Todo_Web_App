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
    }}
    

    className='flex justify-between'
    >
        <input
            type='text'
            value={newTask}
            placeholder='Enter Your Todo'
            onChange={(e) => {
                setNewTask(e.target.value)
            }}
            className='w-full h-14 px-4 rounded-l-xl text-xl'
        />
        <button className='text-xl px-8 text-white font-semibold bg-black rounded-r-xl'>Add</button>
    </form>
  )
}

export default TaskForm