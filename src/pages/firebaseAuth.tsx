import type {NextPage} from 'next';
import Head from 'next/head';
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth';
import {useEffect, useState} from 'react';
import {authFirebase, writeProject} from '../firebase/config';
import {child, get, getDatabase, onValue, ref, onChildChanged} from 'firebase/database';


const FirebaseAuth:NextPage=()=>{
  const dbRef = ref(getDatabase());
  get(child(dbRef, `projects/`)).then((snapshot) => {
    if (snapshot.exists()) {
      // console.log(snapshot.val());
      // setProjects(snapshot.val());
    } else {
      console.log('No data available');
    }
  }).catch((error) => {
    console.error(error);
  });

  useEffect(()=>{
    a();
  }, []);
  const a=()=>{
    const db = getDatabase();
    const auth = getAuth();


    return onValue(ref(db, 'projects/'), (snapshot) => {
      const username = (snapshot.val()) || 'Anonymous';
      console.log(username);
      setProjects(snapshot.val());
      // ...
    } );
  };


  const [projects, setProjects]=useState<any>({});

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


  const handleLogin=()=> {
    signInWithEmailAndPassword(authFirebase, email1, password1)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });
  };

  const [email, setEmail]=useState('');
  const [password, setPassword]=useState('');
  const [email1, setEmail1]=useState('');
  const [password1, setPassword1]=useState('');
  const [projectName, setProjectName]=useState('');


  const [user, setUser]=useState(authFirebase.currentUser);

  useEffect(()=>{
    setUser(authFirebase.currentUser);
  }, [authFirebase.currentUser]);


  return <>

    <main className={'globalMain'}>
      <div style={{padding: '10px'}}>{user?.email}</div>

      <div style={{padding: '10px'}}>
        <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <input type="text" value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <button onClick={handleSubmit}>Register</button>
        <button onClick={()=>authFirebase.signOut()}>Logout</button>
      </div>

      <div style={{padding: '10px'}}>
        <input type="text" value={email1} onChange={(e)=>setEmail1(e.target.value)}/>
        <input type="text" value={password1} onChange={(e)=>setPassword1(e.target.value)}/>
        <button onClick={handleLogin}>Login</button>
      </div>

      <div style={{padding: '10px'}}>
        <input type="text" value={projectName} onChange={(e)=>setProjectName(e.target.value)}/>
        <button onClick={()=> {
          writeProject(projectName );
          // writeUserData('33', 's', 's', 's' );
        } }>SetProject</button>
      </div>

      <div>{Object.keys(projects).map((el:any, index)=><div style={{padding: '10px'}} key={index}>{projects[el]?.project}</div>)}</div>

    </main>
  </>;
};


export default FirebaseAuth;
