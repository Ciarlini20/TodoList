import Clipboard from '../assets/Clipboard.svg'


export function EmptyList(){
  return(
    <div className='w-full h-60 mt-6 flex flex-col items-center justify-center gap-4 border-t-2 rounded-lg border-gray_400'>
      <img src={Clipboard} className="text-gray_300"/>
      <div>
        <p className='font-bold'>Você ainda não tem tarefas cadastradas</p>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </div>
    </div>
  )
}