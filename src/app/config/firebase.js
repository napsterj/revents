import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';


const firebaseConfig = {
    apiKey: "AIzaSyC4PebOrA6MY7dWjApuVTtsvr3d3_gmEZk",
    authDomain: "reventsdb-818b9.firebaseapp.com",
    projectId: "reventsdb-818b9",
    storageBucket: "reventsdb-818b9.appspot.com",
    messagingSenderId: "1043943484851",
    appId: "1:1043943484851:web:3409664defd322e9cdafc6"
}

firebase.initializeApp(firebaseConfig);
firebase.firestore();
export default firebase;