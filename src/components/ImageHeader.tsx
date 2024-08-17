import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'



function ImageHeader() {
  return (
    <div className='flex items-center '>
      <img src={reactLogo} className="logo react w-20 h-20 object-contain" alt="React logo" />
      <span className='mx-4'>+</span>
      <img src={viteLogo} className="logo w-20 h-20 object-contain" alt="Vite logo" />
    </div>
  )
}

export default ImageHeader
 