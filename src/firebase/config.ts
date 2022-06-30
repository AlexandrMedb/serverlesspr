import {initializeApp, getApp, getApps} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {child, getDatabase, push, ref, set, update, get} from 'firebase/database';
import firebase from 'firebase/app';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyC0GeB3ezIVBK8DrGzxJ1q8pkCku3v88kM',
  authDomain: 'serverlesspr.firebaseapp.com',
  databaseURL: 'https://serverlesspr-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'serverlesspr',
  storageBucket: 'serverlesspr.appspot.com',
  messagingSenderId: '810627437207',
  appId: '1:810627437207:web:26e9b9945f08907a5ccfd2',
  measurementId: 'G-2FE4X32W13',
};

// Initialize Firebase

// console.log(getApp('name'));


let app;
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApp();
}


export const authFirebase = getAuth(app);
const database = getDatabase(app);


// export function writeProject( name:string) {
//   const db = getDatabase();
//   set(ref(db, 'projects/'), {
//     project: name,
//   }).then((res)=>{
//
//   }).catch((er)=> console.log(er));
// }


export function writeProject( name:string) {
  const db = getDatabase();
  const newPostKey = push(child(ref(db), 'projects')).key;
  set(ref(db, 'projects/'+newPostKey), {
    project: name,
  }).then((res)=>{

  }).catch((er)=> console.log(er));
}

function writeNewPost(uid:string, username:string, picture:string, title:string, body:string) {
  const db = getDatabase();

  // A post entry.
  const postData = {
    author: username,
    uid: uid,
    body: body,
    title: title,
    starCount: 0,
    authorPic: picture,
  };

  // Get a key for a new Post.
  const newPostKey = push(child(ref(db), 'projects')).key;

  // Write the new post's data simultaneously in the posts list and the user's post list.
  const updates = {};
  // @ts-ignore
  // updates['/posts/' + newPostKey] = postData;
  // updates['/user-posts/' + uid + '/' + newPostKey] = postData;

  return update(ref(db), updates);
}


