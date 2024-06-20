import React from 'react'

const Project = () => {
  return (
    <div className="w-full min-h-96 bg-zinc-900 flex flex-col items-center">
      <h1 className="text-white text-center">Enter Your Project Details 🛠️</h1>
      <div className="flex justify-center gap-32 items-center  w-full h-96 max-lg:flex-col max-lg:gap-0 max-lg:content-center max-sm:ml-20">
        <div className="flex flex-col justify-around w-96 h-96 " >
          <div className="flex items-center">
            <h1 className="text-2xl">🧑‍💻</h1>
            <input
              className="bg-zinc-900 outline-none border-b-2 border-b-blue-500 text-white px-4 text-2xl max-sm:text-xl max-sm:w-60"
              type="text"
              placeholder="Project 1 Title"
            />
          </div>          
            <div className="flex">
              <h1 className="text-2xl">🔗</h1>
              <input
                className="bg-zinc-900 outline-none border-b-2 border-b-blue-500 text-white px-4 text-2xl max-sm:text-xl max-sm:w-60"
                type="text"
                placeholder="Project 1 Link"
              />
            </div>
            <div className="flex">
              <h1 className="text-2xl">🍃</h1>
              <textarea
                className="bg-zinc-900 outline-none border-b-2 border-b-blue-500 text-white px-4 text-2xl max-sm:text-xl max-sm:w-60"
                name=""
                id=""
                placeholder="Describe Your Project"
              ></textarea>
            </div>
                     
        </div>
        
        <div className="flex flex-col justify-around w-96 h-96">
        <div className="flex items-center">
            <h1 className="text-2xl">🧑‍💻</h1>
            <input
              className="bg-zinc-900 outline-none border-b-2 border-b-blue-500 text-white px-4 text-2xl max-sm:text-xl max-sm:w-60"
              type="text"
              placeholder="Project 2 Title"
            />
          </div>          
            <div className="flex">
              <h1 className="text-2xl">🔗</h1>
              <input
                className="bg-zinc-900 outline-none border-b-2 border-b-blue-500 text-white px-4 text-2xl max-sm:text-xl max-sm:w-60"
                type="text"
                placeholder="Project 2 Link"
              />
            </div>
            <div className="flex">
              <h1 className="text-2xl">🍃</h1>
              <textarea
                className="bg-zinc-900 outline-none border-b-2 border-b-blue-500 text-white px-4 text-2xl max-sm:text-xl max-sm:w-60"
                name=""
                id=""
                placeholder="Describe Your Project"
              ></textarea>
            </div>            
        </div>
      </div>
    </div>
  )
}

export default Project