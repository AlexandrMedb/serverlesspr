import {NextPage} from 'next';
import styles from 'styles/login.module.scss';
import {
  GoogleAuthProvider,
  signInWithRedirect,
  GithubAuthProvider,
  createUserWithEmailAndPassword, signInWithEmailAndPassword,
} from 'firebase/auth';
import {authFirebase} from '../../firebase/config';
import Link from 'next/link';
import {useRouter} from 'next/router';
import {useEffect, useState} from 'react';


const Login: NextPage = () => {
  const router = useRouter();

  useEffect(()=>{
    authFirebase.onAuthStateChanged((value)=>(value && router.push('/project')));
  }, []);

  const {views} = router.query;

  type view_t='login'|'singUp'

  let view:view_t='singUp';
  if (Array.isArray(views)) {
    [view]=views as view_t[];
  }


  const gitHandler=()=>{
    const provider = new GithubAuthProvider();
    signInWithRedirect(authFirebase, provider).then((res)=> console.log(res));
  };

  const googleHandler=()=>{
    const provider = new GoogleAuthProvider();
    signInWithRedirect(authFirebase, provider).then((res)=> console.log(res));
  };


  const [email, setEmail]=useState('');
  const [password, setPassword]=useState('');
  const [confPassword, setConfPassword]=useState('');
  const [errorInput, setErrorInput]=useState('');


  const submitHandler=()=>{
    if (!email) {
      setErrorInput('email is required');
      return;
    }
    if (email) {
      const valid=email.toLowerCase()
      // eslint-disable-next-line max-len
          .match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
      if (!valid) {
        setErrorInput('email is not valid');
        return;
      }
    }

    if (!password) {
      setErrorInput('password is required');
      return;
    }
    if (password.length<6 && view==='singUp') {
      setErrorInput('password is too short');
      return;
    }

    if (view==='singUp' && password!==confPassword) {
      setErrorInput('password fields must match');
      return;
    }

    setErrorInput('');


    const submitFn=view==='singUp'?createUserWithEmailAndPassword:signInWithEmailAndPassword;
    submitFn(authFirebase, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          router.push('/').then();
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode);
          console.log(errorMessage);
          // ..
        });
  };

  return <main className={styles.wrapper}>
    <div className={styles.container}>
      <h1>
        {view==='login' && 'Login'}
        {view==='singUp' && 'SingUp'}
      </h1>
      <div className={styles.btnContainer}>
        <div onClick={gitHandler}>
          <img src="/icons/icon-github.png" alt=""/>
          Continue with GitHub
        </div>
        <div onClick={googleHandler}>
          <img src="/icons/icon-google.png" alt=""/>
          Continue with Google
        </div>
      </div>

      <div className={styles.orBlock}>OR</div>

      <form className={styles.inputWrapper}>
        <div>Email</div><
          input autoComplete={''} value={email} onChange={(e)=>setEmail(e.target.value)} type="email"/>
        <div>Password</div>
        <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password"/>
        {view==='singUp' && <><div>Confirm password</div>
          <input value={confPassword} onChange={(e)=>
            setConfPassword(e.target.value)} type="password"/>
        </>}
        <div className={styles.btn} onClick={submitHandler}>
          {view==='login' && 'Login'}
          {view==='singUp' && 'Register'}
        </div>

        <div className={styles.errBlock}>{errorInput}</div>

      </form>

      <div className={styles.divider}></div>

      <div className={styles.authLink}>
        {view==='login' && 'Don\'t have an account? '}
        {view==='singUp' && 'Already have an account? '}
        <Link href={view==='login'?'/login/singUp':'/login/login'}>
          <span>
            {view==='login' && 'Register'}
            {view==='singUp' && 'Login'}
          </span>
        </Link>
      </div>

    </div>
  </main>;
};


export default Login;
