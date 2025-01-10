import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
} from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCcDba7w8OQqgWBCmje7-0qDWJHESQDJmA",
  authDomain: "smit-batch-12-bba98.firebaseapp.com",
  projectId: "smit-batch-12-bba98",
  storageBucket: "smit-batch-12-bba98.firebasestorage.app",
  messagingSenderId: "283018929754",
  appId: "1:283018929754:web:8cc72954132661408e1a63",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export { auth, provider,signInWithPopup,GoogleAuthProvider };
