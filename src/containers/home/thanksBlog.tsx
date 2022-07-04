import styles from './thanksBlog.module.scss';

export const ThanksBlog=()=>{
  return ( <section className={styles.wrapper}>
    <div className={styles.container}>
      <h2>"I didn't realise #serverless was so absurdly quick and easy to use.
            Thanks @goserverless you've done an excellent job."</h2>
      <p>@DrPappa</p>
      <div className={styles.ingWrapper}>
        <img src="/img/pir.png" alt=""/>
      </div>

    </div>
  </section>);
};
