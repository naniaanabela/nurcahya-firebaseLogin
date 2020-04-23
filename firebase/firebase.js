import firebase from "firebase/app";
import "firebase/auth";
import "firebase/filestore";

const firebaseConfig = {
apiKey: "AIzaSyA65PluX4kOI-41PTcEfuHGG4fwipuinVo",
  authDomain: "nurcahya-firebaselogin.firebaseapp.com",
  databaseURL: "https://nurcahya-firebaselogin.firebaseio.com",
  projectId: "nurcahya-firebaselogin",
  storageBucket: "nurcahya-firebaselogin.appspot.com",
  messagingSenderId: "101096352187",
  appId: "1:101096352187:web:6bc0e57a93271c68bdfc9e"
};

export const myFirebase = firebase.initializeApp(firebaseConfig);
const baseDb = myFirebase.firestore();
export const db = baseDb;