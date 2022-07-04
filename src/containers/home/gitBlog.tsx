import styles from './gitBlog.module.scss';
import {StatBlog} from '../../components/home/statBlog';

export const GitBlog=()=>{
  return <section className={styles.wrapper}>

    <div className={styles.stats} >
      <StatBlog title={'42,140'} text={'Github Stars'}
        icon={<img src={'/icons/gitIcon.svg'} alt={'icon'}/>}/>
      <StatBlog title={'15,907,086'} text={'Downloads'}
        icon={<img src={'/icons/donloadIcon.svg'} alt={'icon'}/>}/>
      <StatBlog title={'Technology'} text={'Partner'}
        icon={<img src={'/icons/donloadIcon.svg'} alt={'icon'}/>}/>
    </div>
    <div>
      <h1>"I’m still a huge fan of  @Docker but man this
        @goserverless stuff is purely amazing!"</h1>
      <p>@themccallister</p>
      <p> Lead Engineer, Pixel & Tonic</p>
    </div>

  </section>;
};
