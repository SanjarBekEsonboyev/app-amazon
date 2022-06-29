import firebase from "firebase/app";
import 'firebase/auth';

const config = firebase.initializeApp({
    apiKey: "AIzaSyBL1ImcBmGoISfpgtUdloWmXWNwdsiSgrQ",
    authDomain: "clone-e1ec6.firebaseapp.com",
    projectId: "clone-e1ec6",
    storageBucket: "clone-e1ec6.appspot.com",
    messagingSenderId: "336529162268",
    appId: "1:336529162268:web:4830fadd90d4a9c2b41fd9",
    measurementId: "G-FW0DMK554J"
});

export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: "select_account"});

const logout = () => localStorage.removeItem("firebase:authUser:AIzaSyBL1ImcBmGoISfpgtUdloWmXWNwdsiSgrQ:[DEFAULT]");

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export const signOut = () => {
    auth.signOut();
    logout();
}
export default config;