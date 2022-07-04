import {NextPage} from 'next';
import styles from 'styles/login.module.scss';
import {getAuth, GoogleAuthProvider, signInWithRedirect, GithubAuthProvider} from 'firebase/auth';
import {authFirebase} from '../firebase/config';


const Login: NextPage = () => {
  const gitHandler=()=>{
    const provider = new GithubAuthProvider();
    signInWithRedirect(authFirebase, provider).then((res)=> console.log(res));
  };

  const googleHandler=()=>{
    const provider = new GoogleAuthProvider();
    signInWithRedirect(authFirebase, provider).then((res)=> console.log(res));
  };


  return <main className={styles.wrapper}>
    <div className={styles.container}>
      <h1>SingUp</h1>
      <div className={styles.btnContainer}>
        <div onClick={gitHandler}>Continue with GitHub</div>
        <div onClick={googleHandler}>Continue with Google</div>
      </div>

      <div>OR</div>

      <div>
        <input type="email"/>
        <input type="password"/>
        <input type="password"/>
        <button>Login</button>
      </div>
    </div>
    {/* <button onClick={()=>authFirebase.signOut()}>Logout</button>*/}
  </main>;
};


export default Login;
