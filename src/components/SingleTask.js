import React, { useContext, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { AppContext } from "../context/AppContext";

function SingleTask({ todo }) {
  const [completed, setCompleted] = useState(false);
  const [task, setTask] = useState(todo.text);
  const [edit, setEdit] = useState(false);
  const [newTask, setNewTask] = useState("");
  const { removeTask } = useContext(AppContext);

  return (
    <div className="flex justify-between h-14 bg-black shadow shadow-white px-4 rounded-md">
      <div className="flex gap-3 justify-center items-center text-xl text-white font-semibold">
        <input
          type="checkbox"
          checked={completed}
          onClick={() => setCompleted(!completed)}
        />
        <div className={`${completed ? " line-through" : "none" }`} >{task}</div>
      </div>
      <div className="flex  items-center gap-4 text-xl text-white">
        <div>
          {edit ? (
            <form
              onSubmit={() => {
                if (newTask !== "") {
                  setTask(newTask);
                  setNewTask("");
                }
                setEdit(!edit);
              }}
              className="flex gap-2 items-center"
            >
              <input
                type="text"
                value={newTask}
                onChange={(e) => {
                  setNewTask(e.target.value);
                }}
                className="w-[160px] h-5 text-black text-sm px-1 rounded-sm"
              />
              <button
              className="px-2 py-1 rounded-md text-xs border-[1px] cursor-pointer"
              >Add</button>
            </form>
          ) : (
            <FaEdit
              onClick={() => {
                setEdit(!edit);
              }}
            />
          )}
        </div>
        <div onClick={() => removeTask(todo.id)} className=" cursor-pointer">
          <MdDelete />
        </div>
      </div>
    </div>
  );
}

export default SingleTask;
