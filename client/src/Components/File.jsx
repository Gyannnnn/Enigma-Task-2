import React, { useState } from "react";
import Education from "./Education";
import Experiance from "./Experiance";
import Extras from "./Extras";
import PersonalDetails from "./PersonalDetails";
import Project from "./Project";
import axios from 'axios';
import {saveAs} from "file-saver"

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
      return <PersonalDetails formData={formData} setformData={setformData} />;
    } else if (page === 1) {
      return <Education formData={formData} setformData={setformData} />;
    } else if (page === 2) {
      return <Experiance formData={formData} setformData={setformData} />;
    } else if (page === 3) {
      return <Project formData={formData} setformData={setformData} />;
    } else if(page === 4) {
      return <Extras formData={formData} setformData={setformData} />;
    }
  };
  return (
    <div className="w-full h-screen bg-zinc-900 flex flex-col justify-evenly">
      <h1 className="text-white text-center text-3xl pt-4">
        Enter Your Details To Generate Your Resume 📝
      </h1>
      <div className="h-screen flex flex-col items-center justify-center gap-10">
        {pageDisplay()}
        <div>
          <button
            className="bg-blue-500 text-white px-4 py-1 rounded-md ml-2 hover:bg-blue-400 "
            disabled={page === 0}
            onClick={() => setpage((currentpage) => currentpage - 1)}
          >
            Previous
          </button>
          <button
            className="bg-blue-500 text-white px-7 py-1 rounded-md ml-2 hover:bg-blue-400"
            
            onClick={() => {
              if(page===4){
                axios.post("https://resume-api-sand.vercel.app/create-pdf",formData)
                .then(()=>axios.get('https://resume-api-sand.vercel.app/fetch-pdf',
                  {responseType:'blob'}))
                  .then((res)=>{
                    const pdfblob = new Blob([res.data],{
                      type:"application/pdf"

                    })
                    saveAs(pdfblob,'My_resume.pdf')
                  })
              }else{
                setpage((currentpage) => currentpage + 1)
              }
            }}
          >
           {page ===4 ? 'Download Pdf ' : 'Next' }
          </button>
        </div>
      </div>
    </div>
  );
};

export default File;
