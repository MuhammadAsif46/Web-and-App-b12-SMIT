// import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
// import {
//   getAuth,
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   onAuthStateChanged,
//   sendEmailVerification,
//   signOut
// } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";

// const firebaseConfig = {
//   apiKey: "AIzaSyCcDba7w8OQqgWBCmje7-0qDWJHESQDJmA",
//   authDomain: "smit-batch-12-bba98.firebaseapp.com",
//   projectId: "smit-bathc-12-bba98",
//   storageBucket: "smit-batch-12-bba98.firebasestorage.app",
//   messagingSenderId: "283018929754",
//   appId: "1:283018929754:web:8cc72954132661408e1a63",
// };

// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);

// SignUp method:

// createUserWithEmailAndPassword(auth, "asifahmed32c@gmail.com", "12345678")
//   .then((res) => {
//     const user = res.user;
//     console.log("create user--->", user);
//     // console.log("create user--->", user.uid);

// Email-verified:
//     if (user) {
//       sendEmailVerification(auth.currentUser).then(() => {
//         console.log("email chali gayi....");
//       });
//     }else{
//         console.log("email nahi gayi...");
//     }
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     console.log("errorMessage--->", errorMessage);
//     console.log("errorCode--->", errorCode);
//   });

//  already email
// invalid email
// password error // min 6

// Signin method:

// signInWithEmailAndPassword(auth, "asif@gmail.com", "1234567")
//   .then((data) => {
//     const user = data.user;
//     console.log("login-user--->", user);
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     console.log("errorMessage--->", errorMessage);
//     console.log("errorCode--->", errorCode);
//   });

// stateChanged: (if user is exists)

// onAuthStateChanged(auth, (user) => {
//   if (user) {
//     const uid = user.uid;
//     // // console.log("updated");
//     // window.location = "home.html"
//     console.log("uid--->", uid);
//     console.log("uid--->", user);

//   } else {
//     console.log("user nahi hai...");
//     // window.location = ""
//   }
// });

// logout method:

// signOut(auth)
//   .then(() => {
//     console.log("aap ghr jaskty ho...");
//   })
//   .catch((error) => {
//     console.log("error-->",error.message);
//   });
