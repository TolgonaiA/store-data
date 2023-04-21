import React from 'react';
import { MONTHS } from '../../data/constants';
import './TableHeader.css';

const TableHeader = () => {
  return (
    <div className="table-header">
      <div className="table-header-item">Stores</div>
      {MONTHS.map((month, index)=> (
        <div key={index} className="table-header-item">{month}</div>
      ))}
      <div className="">Total</div>
    </div>
  );
}

export default TableHeader;