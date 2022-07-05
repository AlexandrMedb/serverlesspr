import {NextPage} from 'next';
import {authFirebase, database} from '../firebase/config';
import {child, get, getDatabase, onValue, push, ref, set} from 'firebase/database';
import {useEffect, useState} from 'react';
import {any} from 'prop-types';

const Project:NextPage=()=>{
  const user=authFirebase.currentUser;

  console.log(user);

  function createProject( name:string) {
    // const db = getDatabase();
    const db = database;
    const newPostKey = push(child(ref(db), 'project')).key;
    set(ref(db, `project/${user?.uid}/${newPostKey}`), {
      projectName: name,
    }).then((res)=>{

    }).catch((er)=> console.log(er));
  }

  const [prName, setPrName]=useState('');
  const [projects, setProjects]=useState<{ [key:string]:{projectName: string} }>();

  const crateHandler=()=>{
    createProject(prName);
  };

  const db = database;
  useEffect(()=>{
    const starCountRef = ref(db, `project/${user?.uid}`);
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      setProjects(data);
    });
  }, [user]);

  // console.log(projects);

  return <>
    <div style={{padding: '20px'}}>{user?.email}</div>
    <div style={{padding: '20px'}}>
      <input type="text" value={prName} onChange={(e)=>setPrName(e.target.value)}/>
    </div>

    <div style={{padding: '20px'}} onClick={crateHandler}>create</div>
    {projects && Object.keys(projects).map((el)=><div style={{padding: '20px'}} key={el}>{projects[el].projectName}</div>)}


  </>;
};


export default Project;
