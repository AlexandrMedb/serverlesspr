import styles from './zeroFrictionBlog.module.scss';
import {ButtonC} from '../../components/buttonC';

export const ZeroFrictionBlog=()=>{
  return <section className={styles.wrapper}>
    <h2>
        Zero-friction serverless application development for all.
    </h2>
    <p>Reduce overhead, liberate innovation.</p>
    <div className={styles.buttonWrapper}>
      <ButtonC text={'Deploy Now'} onClick={()=>{}}/>
    </div>
  </section>;
};
