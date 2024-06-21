import React from "react";

const Experiance = ({formData,setformData}) => {
  return (
    <div className="w-full min-h-96 bg-zinc-900 flex flex-col items-center content-center">
      <h1 className="text-white text-center">Enter Your Experiance Details 🧑‍💻</h1>
      <div className="flex justify-center gap-32 items-center  w-full h-96 max-lg:flex-col max-lg:gap-0 max-lg:content-center max-sm:ml-20">
        <div className="flex flex-col justify-around w-96 h-96 " >
          <div className="flex items-center">
            <h1 className="text-2xl">🛠️</h1>
            <input
              className="bg-zinc-900 outline-none border-b-2 border-b-blue-500 text-white px-4 text-2xl max-sm:text-xl max-sm:w-60"
              type="text"
              placeholder="Enter Your first Job"
              value={formData.Firstjob}
              onChange={(e)=>{
                setformData({...formData,Firstjob:e.target.value})
              }}
            />
          </div>          
            <div className="flex">
              <h1 className="text-2xl">👨‍🚒</h1>
              <input
                className="bg-zinc-900 outline-none border-b-2 border-b-blue-500 text-white px-4 text-2xl max-sm:text-xl max-sm:w-60"
                type="text"
                placeholder="Enter Your Position"
                value={formData.Firstjobposition}
               onChange={(e)=>{
                setformData({...formData,Firstjobposition:e.target.value})
               }}
              />
            </div>
            <div className="flex">
              <h1 className="text-2xl">🍃</h1>
              <textarea
                className="bg-zinc-900 outline-none border-b-2 border-b-blue-500 text-white px-4 text-2xl max-sm:text-xl max-sm:w-60"
                name=""
                id=""
                placeholder="Describe Yor Post"
                value={formData.Firstjobdescription}
                onChange={(e)=>{
                  setformData({...formData,Firstjobdescription:e.target.value})

                }}
              ></textarea>
            </div>
            <div className="flex">
              <h1 className="text-2xl">⌚</h1>
              <input
                className="bg-zinc-900 outline-none border-b-2 border-b-blue-500 text-white px-4 text-2xl max-sm:text-xl max-sm:w-60"
                type="text"
                placeholder="Duration"
                value={formData.Firstjobduration}
                onChange={(e)=>{
                  setformData({...formData,Firstjobduration:e.target.value})
                }}
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
              value={formData.Secondjob}
              onChange={(e)=>{
               setformData({...formData,Secondjob:e.target.value})
              }}
            />
          </div>          
            <div className="flex">
              <h1 className="text-2xl">👨‍🚒</h1>
              <input
                className="bg-zinc-900 outline-none border-b-2 border-b-blue-500 text-white px-4 text-2xl max-sm:text-xl max-sm:w-60"
                type="text"
                placeholder="Enter Your Position"
                value={formData.Secondjobposition}
                onChange={(e)=>{
                 setformData({...formData,Secondjobposition:e.target.value})
                }}
              />
            </div>
            <div className="flex">
              <h1 className="text-2xl">🍃</h1>
              <textarea
                className="bg-zinc-900 outline-none border-b-2 border-b-blue-500 text-white px-4 text-2xl max-sm:text-xl max-sm:w-60"
                name=""
                id=""
                placeholder="Describe Yor Post"
                value={formData.Secondjobdescription}
                onChange={(e)=>{
                  setformData({...formData,Secondjobdescription:e.target.value})

                }}
              ></textarea>
            </div>
            <div className="flex">
              <h1 className="text-2xl">⌚</h1>
              <input
                className="bg-zinc-900 outline-none border-b-2 border-b-blue-500 text-white px-4 text-2xl max-sm:text-xl max-sm:w-60"
                type="text"
                placeholder="Duration"
                value={formData.Secondjobduration}
                onChange={(e)=>{
                  setformData({...formData,Secondjobduration:e.target.value})
                }}
              />
            </div>
        </div>
      </div>
    </div>
  );
};

export default Experiance;
