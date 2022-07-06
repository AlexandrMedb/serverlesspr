import type {NextPage} from 'next';
import {DoMore} from '../containers/home/doMore';
import {GitBlog} from '../containers/home/gitBlog';
import {BenefitsBlog} from '../containers/home/benefitsBlog';
import {ThanksBlog} from '../containers/home/thanksBlog';
import {ZeroFrictionBlog} from '../containers/home/zeroFrictionBlog';
import {useEffect, useState} from 'react';
import {User} from '@firebase/auth';
import {authFirebase} from '../firebase/config';


const Home: NextPage = () => {
  const [user, setUser]=useState<User>();

  useEffect(()=>{
    authFirebase.onAuthStateChanged((value)=>(value && setUser(value)));
  }, []);

  return (
    <main>
      <DoMore user={user}/>
      <GitBlog/>
      <BenefitsBlog/>
      <ThanksBlog/>
      <ZeroFrictionBlog user={user}/>
    </main>


  );
};

export default Home;
