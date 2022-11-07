import {createContext, useState, useEffect} from 'react'
import {tasks as data} from '../data/tasks'

export const TaskContext = createContext()

export function TaskContextProvider(props) {

  const [tasks, setTasks] = useState([]);

  function createTask(task) {
    // copia el array de tasks y agregale uno nuevo
    setTasks([...tasks,{
      titulo: task.title,
      id: tasks.length,
      descripcion: task.descripcion
    }])
  }

  function deleteTask(taskId){
    setTasks(tasks.filter(task => task.id !== taskId))
  }

    // Cuando cargue el componente voy a traer taks con el nombre data
    useEffect(() => {
      setTasks(data)
    }, [])

  return (
    <TaskContext.Provider value={{
      tasks: tasks,
      createTask: createTask,
      deleteTask: deleteTask
    }}>
      {/* aquí van a ir más componentes = 'children' */}
        {props.children}
    </TaskContext.Provider>
  )
}