import { supabaseConf } from "./supabase.js";
// console.log(supabaseConf.auth.user.id)

// INSERT DATA:
let btn = document.getElementById("createPost");

btn.addEventListener("click", async () => {
  let title = document.getElementById("title");
  let description = document.getElementById("description");

  try {
    const { error } = await supabaseConf
      .from("posts")
      .insert({ title: title.value, description: description.value });

    if (error) {
      console.log("error-->", error.message);
    } else {
      console.log("data add successfully!");
    }

    title.value = "";
    description.value = "";
  } catch (err) {
    console.log("err-->", err);
  }
});

// fetch/Read DATA:

// let btn = document.getElementById("createPost");

let main = document.getElementById("main");

const fetchData = async () => {

  try {
    const { data, error } = await supabaseConf.from("posts").select();

    if (error) {
      console.log("error-->", error.message);
    } else {
      console.log("data get successfully!");
      // console.log("data--,", data);
      // data.forEach(
      //   (post) =>
      //     (main.innerHTML += `<div class="card">
      //   <h2>${post.title}</h2>
      //   <p>${post.description}</p>
      //   <button id="deletePost" data-id="${post.id}">Delete Post</button>
      //   </div>`)
      //   // console.log("post->", post.title," --- ", post.description)
      // );
      data.forEach((post) => {
        // Create HTML content for each post
        main.innerHTML += `<div class="card">
          <h2>${post.title}</h2>
          <p>${post.description}</p>
          <button id="deletePost" data-id="${post.id}">Delete Post</button>
        </div>`;
      });

      // Now add event listeners to the dynamically created delete buttons
      let deleteButtons = document.getElementById("deletePost");
      deleteButtons.forEach((button) => {
        button.addEventListener("click", async (event) => {
          const postId = event.target.getAttribute("data-id"); // Get the id from the button's data-id attribute
          console.log("Deleting post with id:", postId);

          try {
            const { error } = await supabaseConf
              .from("posts")
              .update(title, title.value)
              .eq("id", postId); // Delete the post with the corresponding id

            if (error) {
              console.log("error-->", error.message);
            } else {
              console.log("Post deleted successfully!");
              // Remove the post from the DOM after deletion
              // e.target.closest(".card").remove();
              
            }
          } catch (err) {
            console.log("err-->", err);
          }
        });
      });


      
      

      title.value = "";
      description.value = "";
    }
  } catch (err) {
    console.log("err-->", err);
  }
};

fetchData();



// const deletePost = () => {
//   console.log("hello");
// };

// let btn1 = document.getElementById("deletePost");
// if (btn1) {
//   btn1.addEventListener("click", async () => {
//     console.log("hello");
//     try {
//       const { error, data } = await supabaseConf
//         .from("posts")
//         .delete()
//         .eq("id", post.id);

//       if (error) {
//         console.log("error-->", error.message);
//       } else {
//         console.log("data add successfully!");
//       }

//       title.value = "";
//       description.value = "";
//     } catch (err) {
//       console.log("err-->", err);
//     }
//   });
// }
