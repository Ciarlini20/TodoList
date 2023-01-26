import { PlusCircle } from "phosphor-react";
import { FormEvent, useState } from "react";
import { List } from "./List";

export function CreateNewTask(){

  const [tasks, setTasks] = useState<string[]>([])
  const [newTask, setNewTask] = useState('')
  const [tasksCount, setTasksCount] = useState(0)
  const [completedTasks, setCompletedTasks] = useState(0)

  function handleCreateNewTask(event: FormEvent){
    event.preventDefault()

    if(newTask.length == 0){
      alert('Por favor digite uma tarefa válida')
      return
    }else{
      setTasks([...tasks, newTask])
      setTasksCount(tasksCount + 1)
      setNewTask('')
    }
  }

  function deleteTask(taskToDelete: string){
    const taskListWithDeletedOne = tasks.filter(task => {
      return task != taskToDelete
   
    })

    setTasks(taskListWithDeletedOne)
    setTasksCount(tasksCount - 1) 
  }

  function completedTask(isCompleted: boolean){
    if (isCompleted == true){
      setCompletedTasks(completedTasks + 1)
    }else{
      setCompletedTasks(completedTasks - 1)
    }
  }

  return(
    <div className="w-full">
      <form 
        className="w-[736px] flex flex-row gap-2"
        onSubmit={handleCreateNewTask}  
      >
        <input 
          type="text" 
          className="bg-gray_500 w-full border border-gray_700 rounded-lg pl-4 py-4 text-white"
          placeholder="Adicione uma nova tarefa"
          value={newTask}
          onChange={(e) => {setNewTask(e.target.value)}}
        />
        <button 
          type="submit"
          className="bg-blue_dark flex flex-row gap-2 p-4 items-center  justify-center text-white rounded-lg "
        >
          Criar <PlusCircle size={16} />
        </button>
      </form>
      <div className="w-full mt-16">
      <div className=" flex justify-between">
        <p className="flex flex-row gap-2 justify-center items-center">
          <span className="text-blue text-sm">Tarefas criadas</span>
          <span className="flex justify-center items-center bg-gray_400 text-gray_200 text-xs rounded-lg p-2">{tasksCount}</span>
        </p>
        <p className="flex flex-row gap-2 justify-center items-center">
          <span className="text-purple text-sm">Tarefas concluidas</span>
          <span className="flex justify-center items-center bg-gray_400 text-gray_200 text-xs rounded-lg p-2">{completedTasks} de {tasksCount}</span>
        </p>
      </div>
        {tasks.map((task, i) => {
          return(
            <List 
              key={`${task} - ${i}`} 
              task={task} 
              onDeleteTask={deleteTask}
              onCompletedTask={completedTask}
            />
          )
        })}
      </div>
    </div>
  )
}