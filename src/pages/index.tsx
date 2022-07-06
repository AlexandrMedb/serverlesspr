import type {NextPage} from 'next';
import {DoMore} from '../containers/home/doMore';
import {GitBlog} from '../containers/home/gitBlog';
import {BenefitsBlog} from '../containers/home/benefitsBlog';
import {ThanksBlog} from '../containers/home/thanksBlog';
import {ZeroFrictionBlog} from '../containers/home/zeroFrictionBlog';
import {useEffect, useState} from 'react';
import {authFirebase} from '../firebase/config';
import {useRouter} from 'next/router';

const Home: NextPage = () => {
  const router =useRouter();

  // useEffect(()=>{
  //   authFirebase.onAuthStateChanged((value)=>(value && router.push('/project')));
  // }, []);

  return (
    <main>
      <DoMore/>
      <GitBlog/>
      <BenefitsBlog/>
      <ThanksBlog/>
      <ZeroFrictionBlog/>
    </main>


  );
};

export default Home;
