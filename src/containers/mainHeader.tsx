import styles from './mainHeader.module.scss';
import {LinkMain} from '../components/linkMain';
import {useRouter} from 'next/router';
import {ButtonC} from '../components/buttonC';
import Link from 'next/link';
import {useState} from 'react';
import {authFirebase} from '../firebase/config';


export const MainHeader=()=>{
  const router = useRouter();

  const [menuOpen, setMenuOpen]=useState(false);

  const user=authFirebase.currentUser;

  const clickHandler=()=>{
    if (user) {
      router.push('/project');
    } else router.push('/login');
  };

  return (<>
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
        <div className={styles.burgerMenuIcon}><img onClick={()=>setMenuOpen(!menuOpen)}
          src="/icons/bars-solid.svg" alt=""/></div>


      </div>

    </header>
    {menuOpen &&
            <div className={styles.burgerMenu}>
              <ButtonC text={'Sing Up'} onClick={()=>router.push('/login/singUp')}/>
              <ButtonC text={'Login'} onClick={()=>router.push('/login/login')}/>
              <ButtonC text={'Main'} onClick={()=>router.push('/project')}/>
            </div>}
  </>
  );
};
