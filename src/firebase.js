import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDletMDzdntZnaonwWnTTkEkmLt7Yam0GY",
  authDomain: "manprit619-ff11.firebaseapp.com",
  databaseURL: "https://manprit619-ff11.firebaseio.com",
  projectId: "manprit619-ff11",
  storageBucket: "manprit619-ff11.appspot.com",
  messagingSenderId: "697220653032",
  appId: "1:697220653032:web:2c13be9dbc23082a7d4e5d",
  measurementId: "G-MT01YMGC7Y",
});

const auth = firebase.auth();

export { auth };
