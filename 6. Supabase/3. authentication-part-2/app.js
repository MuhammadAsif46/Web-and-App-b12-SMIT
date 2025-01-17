import { supabaseConf } from "./supabase.js";

// console.log(supabaseConf);
// Signup:
// let btn = document.getElementById("signup-btn");

// btn.addEventListener("click", async () => {
//   let email = document.getElementById("email");
//   let password = document.getElementById("password");

//   try {
//     const { data, error } = await supabaseConf.auth.signUp({
//       email: email.value,
//       password: password.value,
//     });
//     console.log("data--->", data);
//     console.log("error--->", error);
//     email.value = "";
//     password.value = "";
//   } catch (err) {
//     console.log("err---->", err);
//   }
// });

// Login:
let btn = document.getElementById("login-btn");
if (btn) {
  btn.addEventListener("click", async () => {
    let email = document.getElementById("email");
    let password = document.getElementById("password");

    try {
      const { data, error } = await supabaseConf.auth.signInWithPassword({
        email: email.value,
        password: password.value,
      });
      console.log("data--->", data);
      console.log("error--->", error);

      if (error) {
        console.log("errro agaya hai....");
      } else {
        location.href = "home.html";
      }
      email.value = "";
      password.value = "";
    } catch (err) {
      console.log("err---->", err);
    }
  });
} else {
  let btn1 = document.getElementById("logout-btn");
  btn1.addEventListener("click", async () => {
    try {
      const { error } = await supabaseConf.auth.signOut();
      console.log("data--->", error);
      // console.log("error--->", error);

      if (error) {
        console.log("errro agaya hai....");
      } else {
        location.href = "index.html";
      }
    } catch (err) {
      console.log("err---->", err);
    }
  });
}
