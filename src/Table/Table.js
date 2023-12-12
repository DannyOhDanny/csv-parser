import './Table.css';
import { infos } from '../utils/constants';

function Table() {
  return (
    <section className="table">
      <button className="table__button">Загрузить новый файл</button>
      <div className="table__wrapper">
        <table className="table__container">
          <tr className="table__header-row">
            <th className="table__header">Имя</th>
            <th className="table__header">Номер телефона</th>
            <th className="table__header">email</th>
            <th className="table__header">Дата рождения</th>
            <th className="table__header">Адрес</th>
          </tr>
          {infos.map((info, key) => {
            return (
              <tr className="table__row">
                <td className="table__line">{info.name}</td>
                <td className="table__line">{info.tel}</td>
                <td className="table__line">{info.email}</td>
                <td className="table__line">{info.dateOfBirth}</td>
                <td className="table__line">{info.address}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </section>
  );
}

export default Table;
