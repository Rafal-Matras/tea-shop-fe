import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import { Main } from '../Main/Main';

import style from './App.module.css';

export const App = () => {

  return (
      <main className={style.container}>
        <Header/>
        <Main/>
        <Footer/>
      </main>
  );
};