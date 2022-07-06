import React from 'react';
import styles from './doMore.module.scss';
import {ButtonC} from '../../components/buttonC';
import {useRouter} from 'next/router';
import {User} from '@firebase/auth';

interface props_i{
  user?:User
}

export const DoMore=({user}:props_i)=>{
  const router=useRouter();

  const clickHandler=()=>{
    if (user) {
      router.push('/project');
    } else router.push('/login');
  };

  return (<div className={styles.wrapper}>
    <div className={styles.imgWrapper}>
      <img src="serverlesFlash.svg" alt=""/>
    </div>
    <h1>Do more with less.
      Serverless.</h1>
    <h2>All-in-one development & monitoring of auto-scaling apps on AWS Lambda
      Deploy Now
    </h2>
    <div className={styles.buttons}>
      {/* <ButtonC text={'Deploy Now'} onClick={()=>{}} />*/}
      <ButtonC text={'Deploy Now'} onClick={clickHandler} />
    </div>
    <div className={styles.videoContainer}>
      <video src={'/website-home-hero.mp4'}
        autoPlay={true} loop={true} controls={false} muted>
      </video>
    </div>

  </div>);
};
