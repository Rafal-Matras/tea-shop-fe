import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { ProductsListInterface } from '../../types';

import { UseProductContext } from '../../context/ProductContext';

import { SearchIcon } from '../common/SvgIcons/SearchIcon';

import style from './Header.module.css';
import { config } from '../../config/config';

export const Search = () => {

  const navigate = useNavigate();
  const {setProductName, setProductType} = UseProductContext();
  const [searchValue, setSearchValue] = useState<string>('');
  const [searchList, setSearchList] = useState<ProductsListInterface[]>([]);

  useEffect(() => {
    if (searchValue === '') {
      setSearchList([]);
    } else {
      (async () => {
        const response = await fetch(`${config.URL}shop/search/${searchValue}`);
        const list = await response.json();
        setSearchList(list);
      })();

    }
  }, [searchValue]);

  const search = (e: any) => {
    e.preventDefault();
    setProductName('search');
    setProductType(searchValue);
    setSearchValue('');
    navigate('/shop');
  };

  const selectProduct = (id:string) => {
    setSearchValue('')
    navigate(`/product/${id}`)
    window.location.reload()
  }

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
        <p className={style.searchButton}>
          <SearchIcon className={style.searchIcon}/>
        </p>
      </form>
      <ul className={searchList.length > 0 ? style.searchList : style.searchListNone}>
        {searchList.length > 0
          ? searchList.map(item => (
            <li
              className={style.searchListItem}
              key={item.id}
              onClick={()=>selectProduct(item.id)}
            >{item.name} - {item.category} {item.type?.[0]}
            </li>
          ))
          : null
        }
      </ul>
    </div>
  );
};