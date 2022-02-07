import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {

  apiKey: 'AIzaSyD--P9u0wy1Nd_K2J_EA_kKnhmTC3nAbNQ',
  authDomain: 'music-9b4d8.firebaseapp.com',
  projectId: 'music-9b4d8',
  storageBucket: 'music-9b4d8.appspot.com',
  messagingSenderId: '929973206737',
  appId: '1:929973206737:web:9a27aa90d964bfd2fc8ff0',

};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

db.enablePersistence().catch((error) => {
  console.log(`Firebase persistence error ${error.code}`);
});

const usersCollection = db.collection('users');
const songsCollection = db.collection('songs');
const commentsCollection = db.collection('comments');

export {
  auth,
  db,
  usersCollection,
  songsCollection,
  commentsCollection,
  storage,
};
