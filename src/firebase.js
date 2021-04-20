import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyDq-t-hF_UqYGvww7vTOawZLvVXzxKvMOs",
    authDomain: "facebookcolone.firebaseapp.com",
    databaseURL: "https://facebookcolone.firebaseio.com",
    projectId: "facebookcolone",
    storageBucket: "facebookcolone.appspot.com",
    messagingSenderId: "57469290268",
    appId: "1:57469290268:web:467f2a633b53aa91609cd9",
    measurementId: "G-3MX9WFD3XL"
  }; 

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth=firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider};
  export default db;