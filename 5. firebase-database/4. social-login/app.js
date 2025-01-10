// import {auth,provider,signInWithPopup,GoogleAuthProvider} from "./firebase.js"

// let btn = document.getElementById("btn");

// btn.addEventListener("click", () => {
//   signInWithPopup(auth, provider)
//     .then((result) => {
//       const credential = GoogleAuthProvider.credentialFromResult(result);
//       const token = credential.accessToken;
//       const user = result.user;
//       console.log("google login complete");
//       console.log("user-->", user);
//     })
//     .catch((error) => {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//     //   const email = error.customData.email;
//     //   const credential = GoogleAuthProvider.credentialFromError(error);
//       console.log("error-->", error);
//     });
// });


let btn = document.getElementById("btn");
btn.addEventListener("click", () => {
    let file = document.getElementById("file");
    console.log(file.files[0]);
    console.log(file.files[0].name);
});


