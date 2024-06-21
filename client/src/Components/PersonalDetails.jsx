import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
const PersonalDetails = ({formData,setformData}) => {

  return (
    <div className="w-full min-h-96 bg-zinc-900 flex flex-col items-center">
      <h1 className="text-white text-center">Enter Your Personal Details 🪶</h1>
      <div className="grid grid-cols-custom  h-96 items-center  max-xl:grid-cols-2 max-md:grid-cols-1">
        <div className="flex gap-3 item-center justify-center w-96">
          <h1 className="text-2xl">😊</h1>
          <input
            className="bg-zinc-900 outline-none border-b-2 border-b-blue-500 text-white px-4 text-2xl max-sm:text-xl max-sm:w-60"
            type="text"
            placeholder="Enter Your Name"
            value={formData.name}
            onChange={(e)=>{
              setformData({...formData, name: e.target.value})

            }}
          />
        </div>
        <div className="flex gap-3 item-center justify-center w-96">
          <h1 className="text-2xl">📧</h1>
          <input
            className="bg-zinc-900 outline-none border-b-2 border-b-blue-500 text-white px-4 text-2xl max-sm:text-xl max-sm:w-60"
            type="text"
            placeholder="Enter Your Email"
            value={formData.Email}
            onChange={(e)=>{
              setformData({...formData, Email:e.target.value})

            }}  
          />
        </div>
        <div className="flex gap-3 item-center justify-center w-96">
          <h1 className="text-2xl">📞</h1>
          <input
            className="bg-zinc-900 outline-none border-b-2 border-b-blue-500 text-white px-4 text-2xl max-sm:text-xl max-sm:w-60"
            type="text"
            placeholder="Enter Your Phone Number"
            value={formData.Number}
            onChange={(e)=>{
              setformData({...formData,Number:e.target.value})
            }}
          />
        </div>
        <div className="flex gap-3 item-center justify-center w-96">
        <FaLinkedin className="text-blue-900 text-3xl" />
          <input
            className="bg-zinc-900 outline-none border-b-2 border-b-blue-500 text-white px-4 text-2xl max-sm:text-xl max-sm:w-60"
            type="text"
            placeholder="Linkedin Url"
            value={formData.Linkedin}
            onChange={(e)=>{
              setformData({...formData,Linkedin:e.target.value})
            }}
          />
        </div>
        <div className="flex gap-3 item-center justify-center w-96">
        <FaGithub className="text-white text-3xl" />
          <input
            className="bg-zinc-900 outline-none border-b-2 border-b-blue-500 text-white px-4 text-2xl max-sm:text-xl max-sm:w-60"
            type="text"
            placeholder="Enter Your Github Url"
            value={formData.Github}
            onChange={(e)=>{
              setformData({...formData,Github:e.target.value})
            }}
          />
        </div>
        <div className="flex gap-3 item-center justify-center w-96">
          <h1 className="text-2xl">🤹</h1>
          <input
            className="bg-zinc-900 outline-none border-b-2 border-b-blue-500 text-white px-4 text-2xl max-sm:text-xl max-sm:w-60"
            type="text"
            placeholder="Enter Your Skills Separating By A comma"
            value={formData.Skills}
            onChange={(e)=>{
              setformData({...formData,Skills:e.target.value})
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default PersonalDetails;
