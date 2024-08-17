type Input = {
    type: 'text'|'color'|'checkbox'
    value:string;
    setValue:React.Dispatch<React.SetStateAction<string>>;
}

const Input = ({value, setValue}:Input)=> {
  return (
    <div>
      <input type='text' value={value} className='w-full p-2 rounded-sm mb-2 bg-slate-400' onChange={(event) => setValue(event.target.value)}/>
    </div>
  )
}

export default Input
