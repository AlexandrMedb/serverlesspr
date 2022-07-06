import styles from './mainHeader.module.scss';
import {LinkMain} from '../components/linkMain';
import {useRouter} from 'next/router';
import {ButtonC} from '../components/buttonC';
import Link from 'next/link';
import {useEffect, useState} from 'react';
import {authFirebase} from '../firebase/config';
import {User} from '@firebase/auth';


export const MainHeader=()=>{
  const router = useRouter();

  const [menuOpen, setMenuOpen]=useState(false);

  const [user, setUser]=useState<User>();

  useEffect(()=>{
    authFirebase.onAuthStateChanged((value)=>(value && setUser(value)));
  }, []);


  return (<>
    <header className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.left}>
          <Link href={'/'}>
            <img src="/serverles.svg" alt=""/>
          </Link>
        </div>
        <div className={styles.right}>
          {user && <ButtonC text={'Main'} onClick={()=>router.push('/project')}/>}
          {!user && <LinkMain href={'/login/login'} text={'login'} setSecondColor={true}/>}
          {!user && <ButtonC text={'Sing Up'} onClick={()=>router.push('/login/singUp')}/>}


        </div>
        <div className={styles.burgerMenuIcon}><img onClick={()=>setMenuOpen(!menuOpen)}
          src="/icons/bars-solid.svg" alt=""/></div>


      </div>

    </header>
    {menuOpen &&
            <div className={styles.burgerMenu}>
              {!user && <ButtonC text={'Sing Up'} onClick={()=>router.push('/login/singUp')}/>}
              {!user && <ButtonC text={'Login'} onClick={()=>router.push('/login/login')}/>}
              {user && <ButtonC text={'Main'} onClick={()=>router.push('/project')}/>}


            </div>}
  </>
  );
};
