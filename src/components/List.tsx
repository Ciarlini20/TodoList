import * as Checkbox from '@radix-ui/react-checkbox';
import { Check, Trash } from 'phosphor-react';
import { TasksProps } from './CreateNewTask';

interface ListProps {
  task: TasksProps
  onDeleteTask: (item: string) => void
  onCompletedTask: (isCompleted: boolean) => void
}


export function List(props : ListProps){

  

  function handleDeleteTask(){
    props.onDeleteTask(props.task.id)
  }

function handleToggleTaskCompleted(data : boolean){
    if( data == true ){
      props.onCompletedTask(true)
    }else{
      props.onCompletedTask(false)
    }
  }


  return(
    <form className='w-full mt-6 flex items-center justify-between bg-gray_500 py-4 px-5 rounded-lg text-gray_100 text-sm'>
      <div>
        <Checkbox.Root 
          className='flex items-center gap-3 group'
         onCheckedChange={handleToggleTaskCompleted}
        >
          <div className='border-2 border-blue rounded-full w-5 h-5 flex items-center justify-center group-data-[state=checked]:bg-purple_dark group-data-[state=checked]:border-purple_dark'>
            <Checkbox.Indicator>
              <Check size={14} className='text-gray_100'/>
            </Checkbox.Indicator>
          </div>
          <span className='group-data-[state=checked]:line-through group-data-[state=checked]:text-gray_300 text-left'>{props.task.title}</span>
        </Checkbox.Root>
      </div>
      <button 
        className='text-gray_300'
        onClick={handleDeleteTask} 
        title='Delete Task'
      >
          <Trash size={20}/>
      </button>
    </form>
  )
}