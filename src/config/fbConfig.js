import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
// initialize firebase
export const firebaseConfig = {
  apiKey: "AIzaSyDhjlBvKK9bN1xlg-0d00s6MEfZFPYwH6M",
  authDomain: "projectmanagement-app.firebaseapp.com",
  databaseURL: "https://projectmanagement-app.firebaseio.com",
  projectId: "projectmanagement-app",
  storageBucket: "projectmanagement-app.appspot.com",
  messagingSenderId: "651438833099",
  appId: "1:651438833099:web:474faa77df7db3e7f7ca4e"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
