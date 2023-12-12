import './App.css';
import React from 'react';
import { useState, useEffect } from 'react';
import Main from '../Main/Main';
import Table from '../Table/Table';

function App() {
  const [csvData, setCsvData] = useState([]);

  const [saved, setSaved] = useState(false);

  const onUpdateCSVDataHandler = data => {
    if (data) {
      setCsvData(data);
      localStorage.setItem('results', JSON.stringify(data));
      setSaved(true);
    }
  };
  if (saved) {
    localStorage.setItem('saved', JSON.stringify(saved));
  }

  useEffect(() => {
    const isSaved = JSON.parse(localStorage.getItem('saved'));
    const savedResults = JSON.parse(localStorage.getItem('results'));
    setCsvData(savedResults);
    setSaved(isSaved);
  }, []);

  return (
    <main>
      {saved ? (
        <Table data={csvData} setSaved={setSaved}></Table>
      ) : (
        <Main onUpdateCSVDataHandler={onUpdateCSVDataHandler}></Main>
      )}
    </main>
  );
}

export default App;
