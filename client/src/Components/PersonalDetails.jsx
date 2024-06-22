import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const PersonalDetails = ({ formData, setformData }) => {
  return (
    <div className="w-full min-h-96 bg-zinc-900 flex flex-col items-center">
      <h1 className="text-white text-center">Enter Your Personal Details 🪶</h1>
      <div className="grid grid-cols-custom h-96 items-center max-xl:grid-cols-2 max-md:grid-cols-1">
        <div className="flex gap-3 item-center justify-center w-96">
          <h1 className="text-2xl">😊</h1>
          <input
            className="bg-zinc-900 outline-none border-b-2 border-b-blue-500 text-white px-4 text-2xl max-sm:text-xl max-sm:w-60"
            type="text"
            placeholder="Enter Your Name"
            value={formData.name}
            onChange={(e) => setformData({ ...formData, name: e.target.value })}
          />
        </div>
        <div className="flex gap-3 item-center justify-center w-96">
          <h1 className="text-2xl">📧</h1>
          <input
            className="bg-zinc-900 outline-none border-b-2 border-b-blue-500 text-white px-4 text-2xl max-sm:text-xl max-sm:w-60"
            type="text"
            placeholder="Enter Your Email"
            value={formData.email}
            onChange={(e) => setformData({ ...formData, email: e.target.value })}
          />
        </div>
        <div className="flex gap-3 item-center justify-center w-96">
          <h1 className="text-2xl">📞</h1>
          <input
            className="bg-zinc-900 outline-none border-b-2 border-b-blue-500 text-white px-4 text-2xl max-sm:text-xl max-sm:w-60"
            type="text"
            placeholder="Enter Your Phone Number"
            value={formData.phone}
            onChange={(e) => setformData({ ...formData, phone: e.target.value })}
          />
        </div>
        <div className="flex gap-3 item-center justify-center w-96">
          <FaLinkedin className="text-blue-900 text-3xl" />
          <input
            className="bg-zinc-900 outline-none border-b-2 border-b-blue-500 text-white px-4 text-2xl max-sm:text-xl max-sm:w-60"
            type="text"
            placeholder="Linkedin Url"
            value={formData.linkedin}
            onChange={(e) => setformData({ ...formData, linkedin: e.target.value })}
          />
        </div>
        <div className="flex gap-3 item-center justify-center w-96">
          <FaGithub className="text-white text-3xl" />
          <input
            className="bg-zinc-900 outline-none border-b-2 border-b-blue-500 text-white px-4 text-2xl max-sm:text-xl max-sm:w-60"
            type="text"
            placeholder="Enter Your Github Url"
            value={formData.github}
            onChange={(e) => setformData({ ...formData, github: e.target.value })}
          />
        </div>
        <div className="flex gap-3 item-center justify-center w-96">
          <h1 className="text-2xl">🤹</h1>
          <input
            className="bg-zinc-900 outline-none border-b-2 border-b-blue-500 text-white px-4 text-2xl max-sm:text-xl max-sm:w-60"
            type="text"
            placeholder="Enter Your Skills Separating By A comma"
            value={formData.skills}
            onChange={(e) => setformData({ ...formData, skills: e.target.value })}
          />
        </div>
      </div>
    </div>
  );
};

export default PersonalDetails;
