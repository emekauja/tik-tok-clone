import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyCpAJTuc_VE1dts0h9RY5spmApCFIqltlk",
  authDomain: "tik-tok-clone-75ec3.firebaseapp.com",
  databaseURL: "https://tik-tok-clone-75ec3.firebaseio.com",
  projectId: "tik-tok-clone-75ec3",
  storageBucket: "tik-tok-clone-75ec3.appspot.com",
  messagingSenderId: "797105983860",
  appId: "1:797105983860:web:306975a912bff6cc9fdc21"
};

const firebaseApp = 
firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;