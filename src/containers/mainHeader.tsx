import styles from './mainHeader.module.scss';
import {LinkMain} from '../components/linkMain';
import {useRouter} from 'next/router';
import {ButtonC} from '../components/buttonC';


export const MainHeader=()=>{
  const router = useRouter();
  return (
    <header className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.left}>
          <img src="/serverles.svg" alt=""/>
        </div>
        <div className={styles.right}>
          <LinkMain href={'/'} text={'Main'}/>
          <LinkMain href={'/firebaseAuth'} text={'fiebase'} setSecondColor={true}/>

          <ButtonC text={'Sing Up'} onClick={()=>router.push('firebaseAuth')}/>

        </div>

      </div>
    </header>
  );
};
