
import { useState } from 'react'
import './App.css'
import ImageHeader from './components/ImageHeader'
import Input from './components/Input';
import Button from './components/Button';
import { Items } from './types/utils';
import Itemlist from './components/Itemlist';




function App() {

  const [items, setItems] = useState<Items[]>([])
  const [value, setValue] = useState<string>('')

  const handleSubmit = (event: React.FormEvent) =>{
    event.preventDefault()
    setItems((prev) => [...prev, {title:value, id:Date.now().toString()}])
    setValue('');
  }

  

  return (
    <div className='h-[100vh] flex flex-col justify-center items-center'>
      <ImageHeader/>
      <div className='w-[350px] mt-5' onSubmit={handleSubmit}>
        <form className='mb-5'>
          <Input type='text' value={value} setValue={setValue}/>
          <Button className='bg-gray-700 w-full p-2'>Add</Button>
        </form>
        <div className='h-54 overflow-y-auto'>
         <Itemlist items={items} setItems={setItems} />
        </div>
      </div>
    </div>
  )
}

export default App
