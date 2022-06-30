import React from 'react';
import styles from './doMore.module.scss';
import {ButtonC} from '../../components/buttonC';

export const DoMore=()=>{
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
      <ButtonC text={'Deploy Now'} onClick={()=>{}} />
      <ButtonC text={'Deploy Now'} onClick={()=>{}} />
    </div>
    <div>
      <video src={'/website-home-hero.mp4'}
        autoPlay={true} loop={true} controls={false} muted>
      </video>
    </div>

  </div>);
};
