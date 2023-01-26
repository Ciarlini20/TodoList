import Logo from '../assets/logo.svg'

export function Header(){
  return(
    <div className="w-screen h-52 flex items-center justify-center gap-3 bg-gray_700 text-4xl font-black">
      <img src={Logo}/>
      <p><span className='text-blue' >to</span><span className='text-purple_dark'>do</span></p>
    </div>
  )
}