import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
} from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";

// const firebaseConfig = {
//   apiKey: "<your-api-key>",
//   authDomain: "<your-authDomain>",
//   projectId: "<your-projectId>",
//   storageBucket: "<your-storageBucket>",
//   messagingSenderId: "<yourmessagingSenderId>",
//   appId: "<your-appId>",
// };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export { auth, provider,signInWithPopup,GoogleAuthProvider };
