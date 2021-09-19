import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';
import 'firebase/compat/storage';

const firebaseConfig = {
    apiKey: "AIzaSyBGmDHN05uhiu_XM08E9tjq6IEEyEO1cHE",
    authDomain: "worklistproject.firebaseapp.com",
    databaseURL: "https://worklistproject-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "worklistproject",
    storageBucket: "worklistproject.appspot.com",
    messagingSenderId: "141695541692",
    appId: "1:141695541692:web:e7f76a54b4676d56b14bb9"
};

firebase.initializeApp(firebaseConfig);
export default firebase;