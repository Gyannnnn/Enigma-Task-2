import React from "react";
import { IoIosAddCircleOutline } from "react-icons/io";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="h-screen w-full bg-zinc-900 flex items-center justify-center">
      <div className="absolute left-1 top-0">
        <h1 className="text-white text-4xl px-2 py-2">
          <span>&lt;</span>
          <span>Resume</span>
          <span className="text-green-700">Builder/&gt;</span>
        </h1>
      </div>
      <div className="border border-cyan-400 rounded-lg h-28 w-80 text-white flex items-center justify-center gap-2">
        <Link to='/file'>
          <IoIosAddCircleOutline className="text-cyan-400 cursor-pointer text-4xl" />
        </Link>
        <h2 className="text-xl">Generate Your Resume</h2>
      </div>
    </div>
  );
};

export default Home;
