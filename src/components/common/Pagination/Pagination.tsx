import style from './Pagination.module.css';

interface Props {
  currentPage: number;
  totalPages: number;
  setCurrentPage: (current: number) => void;
}

export const Pagination = ({currentPage, totalPages, setCurrentPage}: Props) => {

  const array = new Array(totalPages).fill(1);

  return (
    <div className={style.container}>
      {array.map((item, index) => (
        <div
          key={index}
          className={currentPage === index ? style.activeBox : style.box}
          onClick={() => setCurrentPage(index)}
        >{index + 1}
        </div>
      ))}
    </div>
  );
};