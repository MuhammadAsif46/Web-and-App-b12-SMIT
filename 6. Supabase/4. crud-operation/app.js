import { supabaseConf } from "./supabase.js";
// console.log(supabaseConf.auth.user.id)

let btn = document.getElementById("createPost");


btn.addEventListener("click", async () => {
  let title = document.getElementById("title");
  let description = document.getElementById("description");

  try {
    const { error } = await supabaseConf
      .from("posts")
      .insert({ title: title.value, description: description.value });

      if(error){
        console.log("error-->", error.message);
      }else{
        console.log("data add successfully!");
      }


    title.value = "";
    description.value = "";
  } catch (err) {
    console.log("err-->", err);
  }
});




