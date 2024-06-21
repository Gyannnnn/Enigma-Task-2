import React from "react";

const Education = ({formData,setformData}) => {
  return (
    <div className="w-full min-h-96 bg-transparent flex flex-col items-center">
      <h1 className="text-white text-center mb-2">
        Enter Your Educational Details 🎓
      </h1>
      <div className="w-full h-96 flex justify-between max-md:flex-col max-md:h-80vh">
        <div className="bg-transparent w-1/2 h-96 max-md:w-screen flex flex-col  justify-center gap-10 max-md:h-1/2 max-sm:gap-2  max-sm:justify-evenly">
          {/* Reapeating div 👇 */}
          <div className="flex items-center justify-center gap-5">
            <h1 className="text-2xl">🏫</h1>
            <input
              className="bg-zinc-900 outline-none border-b-2 border-b-blue-500 text-white px-4 text-2xl max-sm:text-xl max-sm:w-60"
              type="text"
              placeholder="Enter Your Collage"
              value={formData.Collage}
              onChange={(e)=>{
                setformData({...formData,Collage:e.target.value})
              }}
            />
          </div>
          <div className="flex items-center justify-center gap-5">
            <h1 className="text-2xl">📅</h1>
            <input
              className="bg-zinc-900 outline-none border-b-2 border-b-blue-500 text-white px-4 text-2xl max-sm:text-xl max-sm:w-60"
              type="text"
              placeholder="Enter Education Year"
              value={formData.Collageyear}
              onChange={(e)=>{
                setformData({...formData,Collageyear:e.target.value})
              }}
            />
          </div>
          <div className="flex items-center justify-center gap-5">
            <h1 className="text-2xl">🎓</h1>
            <input
              className="bg-zinc-900 outline-none border-b-2 border-b-blue-500 text-white px-4 text-2xl max-sm:text-xl max-sm:w-60"
              type="text"
              placeholder="Enter Qualification"
              value={formData.Qualification}
              onChange={(e)=>{
                setformData({...formData,Qualification:e.target.value})
              }}
            />
          </div>
          <div className="flex items-center justify-center gap-5">
            <h1 className="text-2xl">📝</h1>
            <textarea
              className="bg-zinc-900 outline-none border-b-2 border-b-blue-500 text-white px-4 text-2xl max-sm:text-xl max-sm:w-60"
              name=""
              placeholder="Describe your Education"
              id=""
              value={formData.Collagedescription}
              onChange={(e)=>{
                setformData({...formData,Collagedescription:e.target.value})
              }}
            ></textarea>
          </div>

          {/* Reapeating Div👆 */}
        </div>

        {/* Second Div 👇 */}

        <div className="bg-transparent w-1/2 h-96 max-md:w-screen flex flex-col  justify-center gap-10 max-md:h-1/2 max-sm:gap-1 max-sm:justify-evenly">
          <div className="flex items-center justify-center">
            <h1 className="text-2xl">🏦</h1>
            <input
              className="bg-zinc-900 outline-none border-b-2 border-b-blue-500 text-white px-4 text-2xl max-sm:text-xl max-sm:w-60"
              type="text"
              placeholder="Enter Your School"
              value={formData.School}
              onChange={(e)=>{
                setformData({...formData,School:e.target.value})
              }}
            />
          </div>
          <div className="flex items-center justify-center">
            <h1 className="text-2xl">📅</h1>
            <input
              className="bg-zinc-900 outline-none border-b-2 border-b-blue-500 text-white px-4 text-2xl max-sm:text-xl max-sm:w-60"
              type="text"
              placeholder="Enter Education Year"
              value={formData.Schoolyear}
              onChange={(e)=>{
                setformData({...formData,Schoolyear:e.target.value})
              }}
            />
          </div>
          <div className="flex items-center justify-center">
            <h1 className="text-2xl">🎓</h1>
            <input
              className="bg-zinc-900 outline-none border-b-2 border-b-blue-500 text-white px-4 text-2xl max-sm:text-xl max-sm:w-60"
              type="text"
              placeholder="Enter Qualification"
              value={formData.Schoolqualification}
              onChange={(e)=>{
                setformData({...formData,Schoolqualification:e.target.value})

              }}
            />
          </div>
          <div className="flex items-center justify-center">
            <h1 className="text-2xl">📝</h1>
            <textarea
              className="bg-zinc-900 outline-none border-b-2 border-b-blue-500 text-white px-4 text-2xl max-sm:text-xl max-sm:w-60"
              name=""
              placeholder="Describe your Education"
              id=""
              value={formData.Schooldescription}
              onChange={(e)=>{
                setformData({...formData,Schooldescription:e.target.value})
              }}
            ></textarea>
          </div>
        </div>
        {/* Second Div 👆 */}
      </div>
    </div>
  );
};

export default Education;
