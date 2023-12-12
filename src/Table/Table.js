import './Table.css';

function Table({ data, setSaved }) {
  return (
    <section className="table">
      <button
        className="table__button"
        onClick={() => {
          localStorage.clear();
          setSaved(false);
        }}
      >
        Загрузить новый файл{' '}
      </button>
      <div className="table__wrapper">
        <table className="table__container">
          <tbody>
            <tr className="table__header-row">
              <th className="table__header">Имя</th>
              <th className="table__header">Номер телефона</th>
              <th className="table__header">email</th>
              <th className="table__header">Дата рождения</th>
              <th className="table__header">Адрес</th>
            </tr>
            {data.map((data, key) => {
              return (
                <tr className="table__row" key={data.phone}>
                  <td className="table__line">{data.name}</td>
                  <td className="table__line">{data.phone}</td>
                  <td className="table__line">{data.email}</td>
                  <td className="table__line">{data.bday}</td>
                  <td className="table__line">{data.address}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default Table;
