import { Header } from './components/Header'
import { CreateNewTask } from './components/CreateNewTask'
import './styles/global.css'

export function App() {

  return (
    <div className="w-screen h-screen">
      <div className='relative -z-10'>
        <Header/>
      </div>
      <div className='w-full max-w-3xl items-center px-6 flex flex-col  mx-auto -mt-[27px]'>
          <CreateNewTask/>
      </div>
    </div>
  )
}
