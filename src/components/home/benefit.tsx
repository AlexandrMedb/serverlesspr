import {ReactElement} from 'react';
import styles from './benefit.module.scss';

interface props_i {
    title: string
    header: string
    benefits: { tittle: string, text: string }[]
    img:ReactElement
    reverse?:boolean
}

export const Benefit = (props:props_i) => {
  const {title, header, benefits, img, reverse}=props;
  return <section className={styles.wrapper} style={{flexDirection: reverse?'row-reverse':'row'}}>
    <div className={styles.content}>
      <h3>{title}</h3>
      <h2>{header}</h2>
      {benefits.map((el)=><div className={styles.benefitItem}
        key={el.tittle}>
        <h4>{el.tittle}</h4>
        <p>{el.text}</p>
      </div>)}
    </div>
    <div className={styles.imgWrapper}>
      {img}
    </div>
  </section>;
};
