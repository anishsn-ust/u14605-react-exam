import React from 'react';
import "./Transfer.css";

type Props = {
    labelText: string,
    handleAction: ()=>void
}
const Transfer:React.FC<Props> = ({labelText,handleAction }) => {
  return (
    <div className='transfer-container'>
        <button onClick={handleAction}>{labelText}</button>
    </div>
  )
}

export default Transfer