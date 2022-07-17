import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyAQdxjHn4C0-ER4JHIOCtnI6RwyK2T8vxE",
  authDomain: "react-task-79f51.firebaseapp.com",
  projectId: "react-task-79f51",
  storageBucket: "react-task-79f51.appspot.com",
  messagingSenderId: "583622546203",
  appId: "1:583622546203:web:034a6b293caa1811a5b9be",
  measurementId: "G-TMWHBXTNRP"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {db , auth , provider };