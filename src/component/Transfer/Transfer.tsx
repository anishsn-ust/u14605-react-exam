import React from 'react';
import "./Transfer.css";

type Props = {
    labelText: string,
    handleAction: ()=>void
    name: string
}
const Transfer:React.FC<Props> = React.memo(({labelText,handleAction,name }) => {
  return (
    <div className='transfer-container'>
        <button data-testid={name} onClick={handleAction}>{labelText}</button>
    </div>
  )
})

export default Transfer