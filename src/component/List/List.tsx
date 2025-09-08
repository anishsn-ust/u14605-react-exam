import React, { useState } from 'react'
import type { TransferItem } from '../../model/transfer';
import "./List.css";

type Props= {
    list: TransferItem[];
    name: string
}
const List:React.FC<Props> = React.memo(({list, name}) => {
   const [isChecked, setIsChecked] = useState(false);
    const checkItemsInList = (checkedString: string) => {
        list.forEach((item:TransferItem) => {
          if(item.label === checkedString) {
            item.checked= true;
            return
          }
        })
    }
  return (
    <div className='list-container'>
        <ul>
            {list.map((item: TransferItem, index: number)=>(
            <li key={`li-${index}`}><input data-testid={`checkbox-${name}-${index}`} key={`checkbox-${index}`} type="checkbox" checked={item.checked} onChange={()=>{setIsChecked(!isChecked);checkItemsInList(item.label)}}/><span className={`label-${name}-${index}`}>{item.label}</span></li> 
            ))}
        </ul>
    </div>
  )
})

export default List