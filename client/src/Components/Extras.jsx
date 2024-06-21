import React from "react";

const Extras = ({formData,setformData}) => {
  return (
    <div className="w-full min-h-96 bg-zinc-900 flex flex-col items-center">
      <h1 className="text-white text-center">Enter Your Extras 🪶</h1>
      <div  className="flex flex-col h-96 w-full items-center justify-around">
        <div className="flex gap-3 item-center justify-center w-96">
          <h1 className="text-2xl">🗣️</h1>
          <input
            className="bg-zinc-900 outline-none border-b-2 border-b-blue-500 text-white px-4 text-2xl max-sm:text-xl max-sm:w-60 "
            type="text"
            placeholder="Favourable Language"
            value={formData.Language}
              onChange={(e)=>{
                setformData({...formData,Language:e.target.value})
              }}
          />
        </div>
        <div className="flex gap-3 item-center justify-center w-96">
          <h1 className="text-2xl">⚽</h1>
          <input
            className="bg-zinc-900 outline-none border-b-2 border-b-blue-500 text-white px-4 text-2xl max-sm:text-xl max-sm:w-60"
            type="text"
            placeholder="Your Hobbies"
            value={formData.Hobbie}
              onChange={(e)=>{
                setformData({...formData,Hobbie:e.target.value})
              }}
          />
        </div>
      </div>
    </div>
  );
};

export default Extras;
