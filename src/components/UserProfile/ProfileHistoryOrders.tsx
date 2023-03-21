import { ActivePageType, HistoryOrdersInterface } from '../../types';

import style from './UserProfile.module.css';

interface Props {
  orderList: HistoryOrdersInterface[];
  setOrderDetails: (name: ActivePageType, order: number) => void;
}

export const ProfileHistoryOrders = ({orderList, setOrderDetails}: Props) => {

  return (
    <div className={style.historyContainer}>
      <h2 className={style.title}>Historia zakupów</h2>
      <table className={style.table}>
        <thead className={style.tableHead}>
        <tr>
          <th>Lp.</th>
          <th>Zamówienie</th>
          <th>Data</th>
          <th>Kwota</th>
          <th>Status</th>
        </tr>
        </thead>
        <tbody className={style.tableBody}>
        {orderList.map((item, index) => (
          <tr key={index} onClick={() => setOrderDetails('details', index)}>
            <td>{index + 1}</td>
            <td>{item.orderNumber}</td>
            <td>{item.data}</td>
            <td>{item.price}</td>
            <td>{item.status}</td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  );
};