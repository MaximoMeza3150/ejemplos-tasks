import {useContext} from 'react'
import {TaskContext} from '../context/TaskContext'

function TaskCard({task}) {

  const {deleteTask}= useContext(TaskContext)

  return (
      <div className='bg-gray-800 text-white p-4 rounded-md'>
        <ul>
            <li>{task.id}</li>
            <li className='text-xl font-bold capitalize'>{task.titulo}</li>
            <li className='text-gray-500 text-sm'>{task.descripcion}</li>
            <li><button className='bg-red-500 px-2 py-1 rounded-md mt-4 hover:bg-red-400' onClick={() => deleteTask(task.id)}>
                  Eliminar Tarea
                </button>
            </li>
        </ul>
    </div>
  )
}
export default TaskCard