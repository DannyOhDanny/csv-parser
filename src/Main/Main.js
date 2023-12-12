import Papa from 'papaparse';
import { useRef, useState } from 'react';
import Error from '../Error/Error';
import './Main.css';

const allowedExtensions = ['csv'];

function Main({ onUpdateCSVDataHandler }) {
  const [errorOnUpload, setErrorOnUpload] = useState('');

  const hiddenInput = useRef(null);

  const handleChange = event => {
    setErrorOnUpload('');

    localStorage.clear();

    const csvFile = event.target.files[0];

    if (event.target.files.length) {
      const fileExtension = csvFile?.type.split('/')[1];
      if (!allowedExtensions.includes(fileExtension)) {
        setErrorOnUpload('Неправильный формат файла, разрешены только файлы .CSV');
        return;
      }
      Papa.parse(csvFile, {
        skipEmptyLines: true,
        header: true,
        encoding: 'Windows-1251',
        complete: function (results) {
          onUpdateCSVDataHandler(results.data);
        }
      });
    }
  };

  const fileHandler = event => {
    hiddenInput.current.click();
  };

  return (
    <section className="main">
      <div className="main__container">
        {errorOnUpload ? <Error errorOnUpload={errorOnUpload}></Error> : ''}
        <h1 className="main__title">Выберите файл в формате CSV</h1>
        <button className="main__button" onClick={fileHandler}>
          Выберите файл
        </button>
        <input
          ref={hiddenInput}
          onChange={handleChange}
          type="file"
          name="file"
          style={{ display: 'none' }}
        />
      </div>
    </section>
  );
}

export default Main;
