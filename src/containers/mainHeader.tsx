import Link from 'next/link';
import styles from './mainHeader.module.scss';

export const MainHeader=()=>{
  return (
    <header className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.left}>

        </div>
        <div className={styles.right}>
          <Link href={'/'}>Main</Link>
          <Link href={'/firebaseAuth'}>'sss'</Link>
          <Link href={'/redux'}>'sasdad'</Link>
        </div>

      </div>
    </header>
  );
};
