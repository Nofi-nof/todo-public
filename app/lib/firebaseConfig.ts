import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCbc1XAZsSQ09GXYyl5rmE5wcK03kYFVQQ",
  authDomain: "firebase-your-app-id.firebaseapp.com",
  projectId: "firebase-your-app-id",
  storageBucket: "firebase-your-app-id.appspot.com",
  messagingSenderId: "your-messagingSenderId",
  appId: "your-appId",
  measurementId: "your-measurementId",
};

//Firebase初期化
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
