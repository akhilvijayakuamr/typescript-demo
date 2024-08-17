
import Button from './Button'
import { Items, ReactSetState } from '../types/utils'

type ItemList = {
    items: Items[];
    setItems: ReactSetState<Items[]>

};

export default function Itemlist({items, setItems}:ItemList) {

    const handleDelete =(id:string)=>{
        setItems(prev=>prev.filter((data) => data.id !== id))
      }

    return (
            items.map(data=>(
              <div key={data.id} className='flex justify-between items-center border rounded-sm border-slate-600 pl-2 mb-2 pr-2'>
                <p>{data.title}</p>
                <Button onClick={()=>handleDelete(data.id)}>X</Button>
              </div>
        ))
          
         

    )
}

