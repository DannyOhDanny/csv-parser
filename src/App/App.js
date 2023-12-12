import './App.css';
import Error from '../Error/Error';
function App() {
  return (
    <section className="main">
      <Error></Error>
      <div className="main__container">
        <h1 className="main__title">Выберите файл в формате CSV</h1>
        <button className="main__button">Выберите файл</button>
      </div>
    </section>
  );
}

export default App;
