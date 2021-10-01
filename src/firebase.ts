import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDTsQRtgb7KAwMeLdELzN_zHwmrtRnEJPE",
  authDomain: "contactpage-c359a.firebaseapp.com",
  projectId: "contactpage-c359a",
  storageBucket: "contactpage-c359a.appspot.com",
  messagingSenderId: "132253180306",
  appId: "1:132253180306:web:57487f7259cc3e7fa8e14b",
  measurementId: "G-6ZHGK23D75",
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
// Initialize Firebase
export const firestore = firebase.firestore();
