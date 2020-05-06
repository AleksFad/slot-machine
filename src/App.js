import React from 'react';
import 'normalize.css';

import PayTable from './components/paytable';
import Table from './components/table';

import './App.scss';

function App() {
  return (
    <div className='App'>
      <PayTable />
      <Table spin={false} />
    </div>
  );
}

export default App;
