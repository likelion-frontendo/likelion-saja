import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCIkukWRJszdr7idpMABTC-lJKjZ2P1D9g",
  authDomain: "rlawlsdn263-firebase.firebaseapp.com",
  projectId: "rlawlsdn263-firebase",
  storageBucket: "rlawlsdn263-firebase.appspot.com",
  messagingSenderId: "653297410206",
  appId: "1:653297410206:web:9b4c7da286827926119b8f",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
