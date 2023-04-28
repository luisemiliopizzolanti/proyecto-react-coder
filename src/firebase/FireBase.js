
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {

  apiKey: "AIzaSyAW966tleYAAMS-pMypIm4F8OzRJ3g06KA",
  authDomain: "coderhouse-react-317e8.firebaseapp.com",
  projectId: "coderhouse-react-317e8",
  storageBucket: "coderhouse-react-317e8.appspot.com",
  messagingSenderId: "370606307128",
  appId: "1:370606307128:web:1c0ffab9e1a51a182e73cd"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
