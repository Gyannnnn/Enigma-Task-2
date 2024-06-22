import React from "react";

const Experiance = ({ formData, setformData }) => {
  return (
    <div className="w-full min-h-96 bg-zinc-900 flex flex-col items-center content-center">
      <h1 className="text-white text-center">Enter Your Experience Details 🧑‍💻</h1>
      <div className="flex justify-center gap-32 items-center w-full h-96 max-lg:flex-col max-lg:gap-0 max-lg:content-center max-sm:ml-20">
        <div className="flex flex-col justify-around w-96 h-96">
          <div className="flex items-center">
            <h1 className="text-2xl">🛠️</h1>
            <input
              className="bg-zinc-900 outline-none border-b-2 border-b-blue-500 text-white px-4 text-2xl max-sm:text-xl max-sm:w-60"
              type="text"
              placeholder="Enter Your first Job"
              value={formData.exp1_org}
              onChange={(e) => setformData({ ...formData, exp1_org: e.target.value })}
            />
          </div>
          <div className="flex">
            <h1 className="text-2xl">👨‍🚒</h1>
            <input
              className="bg-zinc-900 outline-none border-b-2 border-b-blue-500 text-white px-4 text-2xl max-sm:text-xl max-sm:w-60"
              type="text"
              placeholder="Enter Your Position"
              value={formData.exp1_pos}
              onChange={(e) => setformData({ ...formData, exp1_pos: e.target.value })}
            />
          </div>
          <div className="flex">
            <h1 className="text-2xl">🍃</h1>
            <textarea
              className="bg-zinc-900 outline-none border-b-2 border-b-blue-500 text-white px-4 text-2xl max-sm:text-xl max-sm:w-60"
              placeholder="Describe Your Post"
              value={formData.exp1_desc}
              onChange={(e) => setformData({ ...formData, exp1_desc: e.target.value })}
            ></textarea>
          </div>
          <div className="flex">
            <h1 className="text-2xl">⌚</h1>
            <input
              className="bg-zinc-900 outline-none border-b-2 border-b-blue-500 text-white px-4 text-2xl max-sm:text-xl max-sm:w-60"
              type="text"
              placeholder="Duration"
              value={formData.exp1_dur}
              onChange={(e) => setformData({ ...formData, exp1_dur: e.target.value })}
            />
          </div>
        </div>

        <div className="flex flex-col justify-around w-96 h-96">
          <div className="flex items-center">
            <h1 className="text-2xl">🛠️</h1>
            <input
              className="bg-zinc-900 outline-none border-b-2 border-b-blue-500 text-white px-4 text-2xl max-sm:text-xl max-sm:w-60"
              type="text"
              placeholder="Enter Your second Job"
              value={formData.exp2_org}
              onChange={(e) => setformData({ ...formData, exp2_org: e.target.value })}
            />
          </div>
          <div className="flex">
            <h1 className="text-2xl">👨‍🚒</h1>
            <input
              className="bg-zinc-900 outline-none border-b-2 border-b-blue-500 text-white px-4 text-2xl max-sm:text-xl max-sm:w-60"
              type="text"
              placeholder="Enter Your Position"
              value={formData.exp2_pos}
              onChange={(e) => setformData({ ...formData, exp2_pos: e.target.value })}
            />
          </div>
          <div className="flex">
            <h1 className="text-2xl">🍃</h1>
            <textarea
              className="bg-zinc-900 outline-none border-b-2 border-b-blue-500 text-white px-4 text-2xl max-sm:text-xl max-sm:w-60"
              placeholder="Describe Your Post"
              value={formData.exp2_desc}
              onChange={(e) => setformData({ ...formData, exp2_desc: e.target.value })}
            ></textarea>
          </div>
          <div className="flex">
            <h1 className="text-2xl">⌚</h1>
            <input
              className="bg-zinc-900 outline-none border-b-2 border-b-blue-500 text-white px-4 text-2xl max-sm:text-xl max-sm:w-60"
              type="text"
              placeholder="Duration"
              value={formData.exp2_dur}
              onChange={(e) => setformData({ ...formData, exp2_dur: e.target.value })}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experiance;
