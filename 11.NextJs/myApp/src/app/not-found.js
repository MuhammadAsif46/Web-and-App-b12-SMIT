import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div>
      <h1>NotFound</h1>
      <Link href={"/"} className="text-blue-400 hover:underline">Home</Link>
    </div>
  );
};

export default NotFound;
