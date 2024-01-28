import { Children, createContext, useState } from "react";

export const AppContext = createContext();


export function AppContextProvider({children}){


    const [task,setTask] = useState([]);

    const addTask=(newTask)=>{

        if(newTask !== ""){
            const taskObject = {
                id:Date.now(),
                text:newTask
            }
    
            setTask(prevState=>[...prevState,taskObject])
        }
    }

    const removeTask=(todoId)=>{
        console.log(task);
        setTask(
            task.filter((todo) => todo.id != todoId)
            )
            console.log(task);
    }   


    const value = {
        task,
        setTask,
        addTask,
        removeTask
    };

    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}