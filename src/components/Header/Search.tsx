import { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { ProductsListInterface } from '../../types';

import { AppContext } from '../../context/AppContext';

import { SearchIcon } from '../common/SvgIcons/SearchIcon';

import style from './Header.module.css';

export const Search = () => {

  const {allProducts, setProductName, setProductType} = useContext(AppContext);
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState<string>('');
  const [searchList, setSearchList] = useState<ProductsListInterface[]>([]);

  useEffect(() => {
    if (searchValue === '') {
      setSearchList([]);
    } else {
      const list = allProducts.filter(item => item.name.toLowerCase().includes(searchValue.toLowerCase()));
      setSearchList(list);
    }
  }, [searchValue]);

  const search = (e: any) => {
    e.preventDefault();
    setProductName('search');
    setProductType(searchValue);
    setSearchValue('');
    navigate('/shop');
  };

  return (
    <div className={style.searchBox}>
      <form className={style.search} onSubmit={search}>
        <input
          className={style.searchInput}
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="wpisz szukaną nazwę..."
        />
        <button className={style.searchButton}>
          <SearchIcon className={style.searchIcon}/>
        </button>
      </form>
      <ul className={searchList.length > 0 ? style.searchList : style.searchListNone}>
        {searchList.length > 0
          ? searchList.map(item => (
            <Link
              className={style.searchListItem}
              key={item.id}
              to={`/product/:${item.id}`}
              onClick={() => setSearchValue('')}
            >{item.name} - {item.category} {item.type?.[0]}</Link>
          ))
          : null
        }
      </ul>
    </div>
  );
};