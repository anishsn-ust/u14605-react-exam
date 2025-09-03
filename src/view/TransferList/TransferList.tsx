import { useState } from 'react'
import { getAllList } from '../../service/transferService'
import type { TransferItem } from '../../model/transfer'
import List from '../../component/List/List';
import Transfer from '../../component/Transfer/Transfer';
import "./TransferList.css";

const TransferList = () => {
    let [fromList, setFromList]= useState<TransferItem[]>(getAllList());
    let [toList, setToList]= useState<TransferItem[]>([]);
    const leftListItemClick = (checkedString: string) => {
        fromList.forEach((item:TransferItem) => {
          if(item.label === checkedString) {
            item.checked= true;
            return
          }
        })
    }
    const rightListItemClick = (checkedString: string) => {
        toList.forEach((item:TransferItem) => {
          if(item.label === checkedString) {
            item.checked= true;
            return
          }
        })
    }
    const transferRight= ()=> {
       const listToTransferRight=fromList.filter((item:TransferItem)=>item.checked);
       fromList = fromList.filter((item:TransferItem)=>{
        return !listToTransferRight.find((i)=>i.label === item.label)
       })
       setFromList(fromList);
       toList=toList.concat(listToTransferRight);
       toList.forEach((item:TransferItem)=>item.checked = false);
       setToList(toList);
    }
    const transferLeft= ()=> {
       const listToTransferLeft=toList.filter((item:TransferItem)=>item.checked);
       toList = toList.filter((item:TransferItem)=>{
        return !listToTransferLeft.find((i)=>i.label === item.label)
       });
       setToList(toList);
       fromList = fromList.concat(listToTransferLeft);
       fromList.forEach((item:TransferItem)=>item.checked = false);
       setFromList(fromList);
    }

  return (
    <div className='container'>
       <List  name="left-list" key="left-list" list={fromList} checkItem={leftListItemClick}></List>
       <div className='action-container'>
         <Transfer name="transfer-to" handleAction={transferRight} labelText='>'></Transfer>
         <Transfer name="transfer-from"handleAction={transferLeft} labelText='<'></Transfer>
       </div>
       <List name="right-list" key="right-list" list={toList} checkItem={rightListItemClick}></List>
    </div>
  )
}

export default TransferList