import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = firebase.initializeApp({
  apiKey: 'AIzaSyClsCFkr2T3x6Nplqr4tTMPfR2FavAeZoo',
  authDomain: 'reciplease-7467f.firebaseapp.com',
  databaseURL: 'https://reciplease-7467f.firebaseio.com',
  projectId: 'reciplease-7467f',
  storageBucket: 'reciplease-7467f.appspot.com',
  messagingSenderId: '512910374013',
  appId: '1:512910374013:web:58b3ffe8d83716b0ff6d14',
  measurementId: 'G-6P1N7DZ536',
});

export { firebaseConfig as firebase };
