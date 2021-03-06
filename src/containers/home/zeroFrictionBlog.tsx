import styles from './zeroFrictionBlog.module.scss';
import {ButtonC} from '../../components/buttonC';
import {useRouter} from 'next/router';
import {User} from '@firebase/auth';

interface props_i{
  user?:User
}

export const ZeroFrictionBlog=({user}:props_i)=>{
  const router=useRouter();
  const clickHandler=()=>{
    if (user) {
      router.push('/project');
    } else router.push('/login');
  };

  return <section className={styles.wrapper}>
    <h2>
        Zero-friction serverless application development for all.
    </h2>
    <p>Reduce overhead, liberate innovation.</p>
    <div className={styles.buttonWrapper}>
      <ButtonC text={'Deploy Now'} onClick={clickHandler}/>
    </div>
  </section>;
};
