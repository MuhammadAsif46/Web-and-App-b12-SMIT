import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  setDoc,
  doc,
  updateDoc,
  serverTimestamp,
  arrayUnion,
  arrayRemove,
  increment,
  deleteDoc,
} from "https://www.gstatic.com/firebasejs/11.1.0/firebase-firestore.js";
// const firebaseConfig = {
//   apiKey: "<your-api-key>",
//   authDomain: "<your-authDomain>",
//   projectId: "<your-projectId>",
//   storageBucket: "<your-messagingSenderId>",
//   messagingSenderId: "<your-api-key>",
//   appId: "<your-appId>",
// };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// let btn = document.getElementById("register-btn");

// btn.addEventListener("click", () => {
//   let name = document.getElementById("name");
//   let phone = document.getElementById("phone");
//   let email = document.getElementById("email");
//   let password = document.getElementById("password");

//   let userData = {
//     name: name.value,
//     phone: phone.value,
//     email: email.value,
//     password: password.value,
//   };

//   //   createUserWithEmailAndPassword(auth, userData.email, userData.password)
//   //     .then(async (res) => {
//   //       const user = res.user;
//   //       console.log("user-->", user);
//   //       try {
//   //         const docRef = await addDoc(collection(db, "users"), {
//   //           ...userData,
//   //           uid: user.uid,
//   //         });
//   //         console.log("Document written with ID: ", docRef.id);
//   //       } catch (e) {
//   //         console.error("Error adding document: ", e);
//   //       }
//   //     })
//   //     .catch((error) => {
//   //       const errorMessage = error.message;
//   //       console.log("errorMessage--->", errorMessage);
//   //     });

//   createUserWithEmailAndPassword(auth, userData.email, userData.password)
//     .then(async (res) => {
//       const user = res.user;
//       console.log("user-->", user);
//       // console.log(auth.currentUser.uid);
//       const id = user.uid;
//       try {
//         await setDoc(doc(db, "users", id), {
//           ...userData,
//           uid: user.uid,
//         });
//         console.log("document add");
//       } catch (e) {
//         console.error("Error adding document: ", e);
//       }
//     })
//     .catch((error) => {
//       const errorMessage = error.message;
//       console.log("errorMessage--->", errorMessage);
//     });
// });

let getAllusers = document.getElementById("getUsers");

getAllusers.addEventListener("click", async () => {
  const querySnapshot = await getDocs(collection(db, "users"));
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} =>`, doc.data());
  });
});

// let btn = document.getElementById("update-btn");

// btn.addEventListener("click", async () => {
//   let name = document.getElementById("name");
//   let phone = document.getElementById("phone");
//   const washingtonRef = doc(db, "users", "QaPkEAEQoVUZG6rYqAKHnIGXuHt2");
//   try {
//     await updateDoc(washingtonRef, {
//       name: name.value,
//       phone: phone.value,
//       school: "smit",
//       timestamp: serverTimestamp(),
//     //   attendace: arrayUnion("absent")
//     //   attendace: arrayRemove("present"),
//     //   count: increment(1)
//       count: increment(-2)
//     });
//     console.log("update doc");
//   } catch (error) {
//     console.log("error", error);
//   }
// });

// let btn = document.getElementById("delete");

// btn.addEventListener("click", async () => {
//   try {
//     await deleteDoc(doc(db, "users", "QaPkEAEQoVUZG6rYqAKHnIGXuHt2"));
//     console.log("delete doc");
//   } catch (error) {
//     console.log("error", error);
//   }
// });