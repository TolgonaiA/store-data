import React from 'react';

const TableFooter = ({data}) => {
  let arr = []
  for (let i = 0; i < 12; i++) {
    let sum = 0;
    for (let j = 0; j < data.length; j++) {
      sum = sum + data[j].months[i].value
    }
    arr.push(sum)
  }

  return (
    <div className="table-header">
      <div className="table-header-item">Total</div>
      {arr.map((month, index)=> (
        <div key={index} className="table-header-item">{month}</div>
      ))}
      <div className="">{arr.reduce((a,b) => a+b)}</div>
    </div>
  );
}

export default TableFooter;