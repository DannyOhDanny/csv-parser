import './App.css';
import { useState } from 'react';
import Main from '../Main/Main';
import Table from '../Table/Table';

function App() {
  const [csvData, setCsvData] = useState([]);
  const [saved, setSaved] = useState(false);
  const onUpdateCSVDataHandler = data => {
    if (data) {
      setCsvData(data);
      localStorage.setItem('test', JSON.stringify(data));
      setSaved(true);
    }
  };
  const localStorageData = localStorage.getItem('test');
  return (
    <>
      <Main onUpdateCSVDataHandler={onUpdateCSVDataHandler}></Main>
      <Table saved={saved} data={csvData} localStorageData={localStorageData}></Table>
    </>
  );
}

export default App;
