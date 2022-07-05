import styles from './mainHeader.module.scss';
import {LinkMain} from '../components/linkMain';
import {useRouter} from 'next/router';
import {ButtonC} from '../components/buttonC';
import Link from 'next/link';


export const MainHeader=()=>{
  const router = useRouter();
  return (
    <header className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.left}>
          <Link href={'/'}>
            <img src="/serverles.svg" alt=""/>
          </Link>
        </div>
        <div className={styles.right}>
          <LinkMain href={'/project'} text={'Main'}/>
          <LinkMain href={'/login/login'} text={'login'} setSecondColor={true}/>

          <ButtonC text={'Sing Up'} onClick={()=>router.push('/login/singUp')}/>

        </div>

      </div>
    </header>
  );
};
