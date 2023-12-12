import Papa from 'papaparse';
import { useRef, useState } from 'react';
import './Main.css';

function Main({ onUpdateCSVDataHandler }) {
  const [csvData, setCsvData] = useState([]);

  // const [errorOnUpload, setErrorOnUpload] = useState('');

  // const [csvFile, setCsvFile] = useState('');

  // const handleFileChange = e => {
  //   setErrorOnUpload('');

  //   if (e.target.files.length) {
  //     const inputFile = e.target.files[0];

  //     const fileExtension = inputFile?.type.split('/')[1];
  //     if (!allowedExtensions.includes(fileExtension)) {
  //       setErrorOnUpload('Неправильный формат файла, разрешены только файлы .CSV');
  //       return;
  //     }

  //     setCsvFile(inputFile);
  //   }
  // };

  // const handleParse = () => {
  //   if (!csvFile) {
  //     setErrorOnUpload('Неправильный формат файла, разрешены только файлы .CSV');
  //   }
  //   const reader = new FileReader();

  //   reader.onload = async ({ target }) => {
  //     const csv = Papa.parse(target.result, {
  //       header: true
  //     });
  //     const parsedData = csv?.data;
  //     const rows = Object.keys(parsedData[0]);

  //     const columns = Object.values(parsedData[0]);
  //     const res = rows.reduce((acc, e, i) => {
  //       return [...acc, [[e], columns[i]]];
  //     }, []);
  //     console.log(res);
  //     setCsvData(res);
  //   };
  //   reader.readAsText(csvFile);
  // };

  const hiddenInput = useRef(null);

  const handleChange = event => {
    const csvFile = event.target.files[0];
    Papa.parse(csvFile, {
      skipEmptyLines: true,
      header: true,
      encoding: 'Windows-1251',
      complete: function (results) {
        onUpdateCSVDataHandler(results.data);
      }
    });
  };

  const fileHandler = event => {
    hiddenInput.current.click();
  };

  return (
    <section className="main">
      <div className="main__container">
        <h1 className="main__title">Выберите файл в формате CSV</h1>
        <button className="main__button" onClick={fileHandler}>
          Выберите файл
        </button>
        <input
          ref={hiddenInput}
          onChange={handleChange}
          type="file"
          name="file"
          accept=".csv"
          style={{ display: 'none' }}
        />
      </div>
    </section>
  );
}

export default Main;
