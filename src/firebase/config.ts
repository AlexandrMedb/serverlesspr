import {initializeApp, getApp, getApps} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {getDatabase} from 'firebase/database';


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


let app;
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApp();
}

export const authFirebase = getAuth(app);
export const database = getDatabase(app);


