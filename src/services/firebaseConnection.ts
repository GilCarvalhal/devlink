import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDio7LuDZFzM-fwszMMNts_Ikfcevg3Guw",
  authDomain: "reactlinks-634e6.firebaseapp.com",
  projectId: "reactlinks-634e6",
  storageBucket: "reactlinks-634e6.firebasestorage.app",
  messagingSenderId: "754539608824",
  appId: "1:754539608824:web:5825d979c8ea14287ed90d",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
