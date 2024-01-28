import React from 'react'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'

function App() {
  return (
    <div className = "w-screen min-h-screen overflow-x-hidden bg-[#4942E4] flex items-center justify-center">
      <div className="w-[500px] rounded-md px-4 py-5 bg-[#11009E] flex flex-col gap-3">
      <TaskForm/>
      <TaskList/>
      </div>
    </div>
  )
}

export default App