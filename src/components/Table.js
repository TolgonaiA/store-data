import React from 'react';
import TableHeader from './TableHeader/TableHeader';
import TableRow from './TableRow/TableRow';
import TableFooter from './TableFooter/TableFooter';
import './Table.css';

const Table = ({data,  changeCellHandler}) => {
  return (
    data 
    ? <div className="table">
        <TableHeader />
        {data.map((el, index) => <TableRow key={index} data={el} changeCellHandler={changeCellHandler}/>)}
        <TableFooter data={data}/>
      </div>
    : <div>Loading ...</div>
  );
}

export default Table;