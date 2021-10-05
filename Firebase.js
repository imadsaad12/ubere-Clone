import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyDi6HC8w8-nRomSzv5DIwI7k_z3XlyeMX0",
    authDomain: "ubereats-clone-5b5f2.firebaseapp.com",
    projectId: "ubereats-clone-5b5f2",
    storageBucket: "ubereats-clone-5b5f2.appspot.com",
    messagingSenderId: "1004828759234",
    appId: "1:1004828759234:web:e77c2f19f94b7ee35a175b"
  };

!firebase.apps.length ? firebase.initializeApp(firebaseConfig):firebase.app();

export default firebase;