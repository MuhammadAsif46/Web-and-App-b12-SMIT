import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  query,
  orderBy,
  limit,
  where
} from "https://www.gstatic.com/firebasejs/11.1.0/firebase-firestore.js";
// const firebaseConfig = {
//   apiKey: "<your-api-key>",
//   authDomain: "<your-authDomain>",
//   projectId: "<your-projectId>",
//   storageBucket: "<your-messagingSenderId>",
//   messagingSenderId: "<your-api-key>",
//   appId: "<your-appId>",
// };

// initialization:
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// add post work start here
let btn = document.getElementById("createPost");

btn.addEventListener("click", async () => {
  let post = document.getElementById("post");
  const date = new Date();
  try {
    // Add a new document with a generated id.
    const docRef = await addDoc(collection(db, "posts"), {
      post: post.value,
      time: date.toLocaleString(),
    });
    console.log("Document written with ID: ", docRef.id);
    console.log("document add");
    post.value = "";
    getRealTimeData();
  } catch (error) {
    console.log(error);
  }
});
// add post work end here



// get post work start here


let data = document.getElementById("main");
const getRealTimeData = async () => {
  const allpost = query(
    collection(db, "posts"),
    orderBy("time", "desc"),
    // limit(4),
    where("school", "==", "smit")
  );

  data.innerHTML = "";
  const eachPost = await getDocs(allpost);
  eachPost.forEach((doc) => {
    // console.log(doc.id, " => ", doc.data());

    const { post, time } = doc.data();
    data.innerHTML += `<div class="mt-10"><span>${post}</span> <span> ${time}</span></div>`;
  });
};
getRealTimeData();

// get post work end here



// delete all post work start here

let deleteBtn = document.getElementById("deletePost");

deleteBtn.addEventListener("click", async () => {
  const allpost = collection(db, "posts");
  const eachPost = await getDocs(allpost);

  eachPost.forEach(async (post) => {
    await deleteDoc(doc(db, "posts", post.id));
    data.innerHTML = "";
    console.log("posts", post.id);
    console.log("delete posts all");
  });
});

// delete all post work end here

