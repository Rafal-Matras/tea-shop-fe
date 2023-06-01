import style from './TitleBar.module.css';
import { ReactNode } from 'react';

interface Props {
  title:string
  children?:ReactNode
}

export const TitleBar = ({title,children}:Props) => {

  return(
    <div className={style.container}>
      <h1 className={style.title}>{title}</h1>
      <img className={style.leftSide} src="/images/onPage/boki-strony.png" alt=""/>
      <img className={style.rightSide} src="/images/onPage/boki-strony.png" alt=""/>
      {children}
    </div>
  )
}