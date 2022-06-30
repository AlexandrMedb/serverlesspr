import type {NextPage} from 'next';
import Head from 'next/head';
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth';
import {useState} from 'react';
import {authFirebase} from '../firebase/config';


const FirebaseAuth:NextPage=()=>{
  const handleSubmit=()=>{
    createUserWithEmailAndPassword(authFirebase, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
        });
  };

  const [email, setEmail]=useState('');
  const [password, setPassword]=useState('');

  return <>
    <Head>
      <script src="https://www.gstatic.com/firebasejs/ui/6.0.1/firebase-ui-auth.js"></script>
      <link type="text/css" rel="stylesheet" href="https://www.gstatic.com/firebasejs/ui/6.0.1/firebase-ui-auth.css" />
    </Head>
    <main className={'globalMain'}>

      <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)}/>
      <input type="text" value={password} onChange={(e)=>setPassword(e.target.value)}/>
      <button onClick={handleSubmit}>Register</button>
    </main>
  </>;
};


export default FirebaseAuth;
