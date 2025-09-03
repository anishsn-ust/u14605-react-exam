import React, { useState } from 'react'
import type { TransferItem } from '../../model/transfer';
import "./List.css";

type Props= {
    list: TransferItem[];
    checkItem:(value:string)=>void;
    name: string
}
const List:React.FC<Props> = ({list, checkItem, name}) => {
   const [isChecked, setIsChecked] = useState(false);
  return (
    <ul className={`list-container ${name}`}>
        {list.map((item: TransferItem, index: number)=>(
           <li key={`li-${index}`}><input key={`checkbox-${index}`} type="checkbox" checked={item.checked} onChange={()=>{setIsChecked(!isChecked);checkItem(item.label)}}/><span className={`label-${name}-${index}`}>{item.label}</span></li> 
        ))}
    </ul>
  )
}

export default List