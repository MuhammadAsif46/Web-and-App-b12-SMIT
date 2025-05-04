import { supabaseConf } from "./supabase.js";

let main = document.getElementById("main");
// RealTime Data:
const realTimeData = () => {
  supabaseConf
    .channel("realtime_posts") //unique name
    .on(
      "postgres_changes",
      { event: "*", schema: "public", table: "posts" },
      (payload) => {
        console.log("Change received!", payload);
        fetchData();
      }
    )
    .subscribe();
};


// Fetch/Get Data
const fetchData = async () => {
  try {
    const { data, error } = await supabaseConf.from("posts").select();

    if (error) {
      console.log("error-->", error.message);
    } else {
      main.innerHTML = "";
      console.log("data get successfully!");

      data.forEach((post) => {
        // Create HTML content for each post
        main.innerHTML += `<div class="card">
          <h2>${post.title}</h2>
          <p>${post.description}</p>
          <button id="updatePost" data-id="${post.id}">Update Post</button>
          <button id="deletePost" data-id="${post.id}">Delete Post</button>
        </div>`;
      });
      eventListener();
    }
  } catch (err) {
    console.log("err-->", err);
  }
};

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

// Delete DATA:
const deletePost = async (postId) => {
  try {
    const { error } = await supabaseConf
      .from("posts")
      .delete()
      .eq("id", postId);
    if (error) {
      console.log("error-->", error.message);
    } else {
      console.log("post delete successFully");
    }
  } catch (err) {
    console.log("err-->", err);
  }
};

// Update DATA:
const updatePost = async (postId) => {
  let newTitle = prompt("add new title");
  let newDescription = prompt("add new Description");

  try {
    const { error } = await supabaseConf
      .from("posts")
      .update({ title: newTitle, description: newDescription })
      .eq("id", postId);
    if (error) {
      console.log("error-->", error.message);
    } else {
      console.log("post update successFully");
    }
  } catch (err) {
    console.log("err-->", err);
  }
};

// Event HANDLERs combine:
const eventListener = () => {
  let updateButtons = document.querySelectorAll("#updatePost");
  let deleteButtons = document.querySelectorAll("#deletePost");

  updateButtons.forEach((update) => {
    update.addEventListener("click", (event) => {
      const id = event.target.getAttribute("data-id");
      updatePost(id);
    });
  });

  deleteButtons.forEach((del) => {
    del.addEventListener("click", (event) => {
      const id = event.target.getAttribute("data-id");
      deletePost(id);
    });
  });
};

fetchData();
realTimeData();


// Upload image 
let upload = document.getElementById("upload");
upload.addEventListener("click", async () => {
  let file = document.getElementById("file").files[0];
  console.log(file);
  // console.log(file.name);

  // if (!file) {
  //   alert("FILE not uploaded");
  //   return
  // }

  try {
    const { error } = await supabaseConf.storage
      .from("upload-image")
      .upload(`public/${file.name}`, file, {
        cacheControl: "3600",
        upsert: false,
      });

    if (error) {
      console.log("error-->", error.message);
    } else {
      console.log("file upload successfully");
    }
  } catch (err) {
    console.log(err);
  }
});
