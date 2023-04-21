import React from 'react';
import { useState } from 'react';
import './TableCell.css'

const TableCell = ({value, id, changeCellHandler}) => {
  const [state, setState] = useState(value);

  const cellHandler = (event) => {
    setState(event.target.value)
    changeCellHandler(event, event.target.value)
  }

  return (
    <div className="table-cell">
      <input
        value={state}
        id={id}
        min={0}
        onChange={(event)=> cellHandler(event)}
        type="number" />
    </div>
  )
}

export default TableCell;