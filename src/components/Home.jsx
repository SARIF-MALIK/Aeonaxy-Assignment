import React from "react";
import bullpng from "../assets/redbull.png";


function Home() {
  return (
    <div >
      <div className="h-screen w-full flex flex-col ">
        <div className="bg-[#0F0B19] h-full w-full flex relative justify-end">
          <div className="max-h-[524px] max-w-[564px] flex flex-col justify-center items-center p-5 absolute top-5 left-5 bg-gradient-to-r from-[#0F0B19] to-transparent">
            <img src={bullpng} className="mt-10 object-cover"></img>
            <p className="text-white text-center font-inter font-light text-2xl">
              Refresh with An Energy Drink And Go Without Stretch Always Be The
              Best
            </p>
            <button className="bg-red-600 text-white font-inter font-medium text-2xl rounded-lg w-44 md:w-60 lg:w-80 h-10 md:h-12 lg:h-16 mt-5">
              START
            </button>
          </div>
          <div className="w-[90%] h-full bg-bullImg bg-cover"></div>
        </div>
      </div>
    </div>
  );
}

export default Home;
