import {NextPage} from 'next';
import {authFirebase, database} from '../firebase/config';
import {child, onValue, push, ref, set} from 'firebase/database';
import {useEffect, useState} from 'react';
import styles from 'styles/project.module.scss';
import {ButtonC} from '../components/buttonC';

const Project:NextPage=()=>{
  const user=authFirebase.currentUser;


  function createProject( name:string) {
    const newPostKey = push(child(ref(database), 'project')).key;
    set(ref(database, `project/${user?.uid}/${newPostKey}`), {
      projectName: name,
    }).then((res)=>{

    }).catch((er)=> console.log(er));
  }

  const [prName, setPrName]=useState('');
  const [projects, setProjects]=useState<{ [key:string]:{projectName: string} }>();

  const crateHandler=()=>{
    createProject(prName);
  };

  useEffect(()=>{
    const starCountRef = ref(database, `project/${user?.uid}`);
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      setProjects(data);
    });
  }, [user]);

  console.log(user);

  return <div className={styles.wrapper}>
    <menu>
      <div>
        <img style={{height: '20px'}} src="/icons/flash.svg" alt=""/>
      </div>

    </menu>
    <main className={styles.mainWrapper}>
      {/* <img src={user?.photoURL||''} alt=""/>*/}
      <div className={styles.userName}>{user?.email}</div>
      <div className={styles.appHeader}>
        <h1>apps</h1>
        <div>
          <input type="text" value={prName} onChange={(e)=>setPrName(e.target.value)}/>
          <ButtonC text={'create app'} onClick={crateHandler}/>
        </div>
      </div>

      <div className={styles.appContainer}>
        {projects && Object.keys(projects).map((el)=>
          <div className={styles.appImp} key={el}>
            {projects[el].projectName}
          </div>)}
      </div>


    </main>


  </div>;
};


export default Project;
