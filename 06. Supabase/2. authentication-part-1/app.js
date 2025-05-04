import { supabase1 } from "./supabase.js";
// console.log(supabase1);

let btn = document.getElementById("signup-btn");
btn.addEventListener("click", async () => {
  let email = document.getElementById("email");
  let password = document.getElementById("password");

  try {
    const {data,error} = await supabase1.auth.signUp({
      email: email.value,
      password: password.value,
    });
    console.log("data-->", data);
    console.log("error-->", error);
    email.value  = ""
    password.value = ""
  } catch (err) {
    console.log("error->", err);
  }
});
