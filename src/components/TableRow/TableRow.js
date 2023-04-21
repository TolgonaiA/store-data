import React from 'react';
import TableCell from '../TableCell/TableCell';
import './TableRow.css';

const TableRow = ({data, changeCellHandler}) => {
  
  let sum = 0
  for (let i = 0; i < data.months.length; i++) {
    if(isNaN(data.months[i].value)) {
      data.months[i].value = 0
    }
    sum = sum + data.months[i].value
  }
  

  return (
    <div className="table-row">
      <div className="color-cell">{data.store.name}</div>
      {data.months.map(month => (
        <TableCell key={month.id} value={month.value} id={month.id} changeCellHandler={changeCellHandler}/>
      ))}
      <div>{sum}</div>
    </div>
  );
}

export default TableRow;