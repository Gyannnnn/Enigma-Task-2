import React, { useState } from "react";
import Education from "./Education";
import Experiance from "./Experiance";
import Extras from "./Extras";
import PersonalDetails from "./PersonalDetails";
import Project from "./Project";

const File = () => {
  const [formData, setformData] = useState({
    name: "",
    email: "",
    phone: "",
    linkedin: "",
    github: "",
    skills: "",

    exp1_org: "",
    exp1_pos: "",
    exp1_desc: "",
    exp1_dur: "",
    exp2_org: "",
    exp2_pos: "",
    exp2_desc: "",
    exp2_dur: "",

    proj1_title: "",
    proj1_link: "",
    proj1_desc: "",
    proj2_title: "",
    proj2_link: "",
    proj2_desc: "",

    edu1_school: "",
    edu1_year: "",
    edu1_qualification: "",
    edu1_desc: "",
    edu2_school: "",
    edu2_year: "",
    edu2_qualification: "",
    edu2_desc: "",
    extra_1: "",
    extra_2: "",
  });
  const [page, setpage] = useState(0);
  const pageDisplay = () => {
    if (page === 0) {
      return <PersonalDetails />;
    } else if (page === 1) {
      return <Education />;
    } else if (page === 2) {
      return <Experiance />;
    } else if (page === 3) {
      return <Project />;
    } else {
      return <Extras />;
    }
  };
  return (
    <div  className="w-full h-screen bg-zinc-900 flex flex-col justify-evenly">
      <h1 className="text-white text-center text-3xl pt-2">Enter Your Details</h1>
      <div className="h-screen flex flex-col items-center justify-center gap-10">
        {pageDisplay()}
        <div>
        <button
          className="bg-blue-500 text-white px-4 py-1 rounded-md ml-2"
          disabled={page === 0}
          onClick={() => setpage((currentpage) => currentpage - 1)}
        >
          &lt;- Previous
        </button>
        <button
          className="bg-blue-500 text-white px-7 py-1 rounded-md ml-2"
          disabled={page === 4}
          onClick={() => setpage((currentpage) => currentpage + 1)}
        >
          Next -&gt;
        </button>
        </div>
      </div>
    </div>
  );
};

export default File;
