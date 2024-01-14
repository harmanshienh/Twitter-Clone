// Import the functions you need from the SDKs you need
import firebase from "firebase";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD3pIsgobeP0ZwC1JCn69o-6kFLm-1zhwU",
  authDomain: "twitter-clone-7949f.firebaseapp.com",
  databaseURL: "https://twitter-clone-7949f-default-rtdb.firebaseio.com",
  projectId: "twitter-clone-7949f",
  storageBucket: "twitter-clone-7949f.appspot.com",
  messagingSenderId: "305855451239",
  appId: "1:305855451239:web:835b70734b01d0608d84c2",
  measurementId: "G-301DZTSNP4"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;