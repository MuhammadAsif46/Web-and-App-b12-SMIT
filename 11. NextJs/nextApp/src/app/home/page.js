"use client"
import React from "react";
import abc from "@/styles/Home.module.css"
import { usePathname, useRouter } from "next/navigation";


const Home = () => {
  const pathname = usePathname()
  const router = useRouter()
  console.log("pathname-->", pathname);

  const loginHandle= () => {
    router.push("/team")
  }
  
  return (
    <div className="">
      <h1 className={abc.about}>hello smit</h1>
      <h2 className={abc.home}>Home</h2>
      <button className="bg-slate-600 text-amber-50 py-3 px-6 mt-2 rounded-2xl" onClick={loginHandle}>Login</button>
    </div>
  );
};

export default Home;

// export const metadata = {
//   title: "Home - test App",
//   description: "This is my Home page",
// };
