import React from 'react';
import { useState } from 'react';
import MOCK_DATA from'../data/mock_stores';
import Table from '../components/Table';
import './Main.css';

const Main = () => {
  const [data, setData] = useState(MOCK_DATA);
  

  const changeCellHandler = (event, value) => {
    let id = event.target.id;
    let storeId = parseInt(id.split('_')[1])
    let month = id.split('_')[0] - 1;
    let index = data.findIndex(store => store.store.id === storeId)
    data[index].months[month].value = parseInt(value);
    setData(prev => [...prev])
  }


  return (
    <>
      <header className='header'>
        <div className='container'>
          Mock Data
        </div>
      </header>
      <main>
        <div className='container'>
          <Table data={data} changeCellHandler={changeCellHandler}/>
        </div>
      </main>
    </>
  );
}

export default Main;