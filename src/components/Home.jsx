import React from "react";
import bullpng from "../assets/redbull.png";
import rec13 from "../assets/Rectangle 13.jpg";
import { TiTick } from "react-icons/ti";
import whiteCan from "../assets/whiteCan.png";

function Home() {
  return (
    <div>
      <div className="h-screen w-screen flex flex-col ">
        <div className="bg-[#0F0B19] h-full w-full flex relative justify-end">
          <div className="max-h-[524px] max-w-[564px] flex flex-col justify-center items-center p-5 absolute top-5 left-5 bg-gradient-to-r from-[#0F0B19] to-transparent">
            <img src={bullpng} className="mt-10 object-cover"></img>
            <p className="text-white justify-center">
              Refresh with An Energy Drink And Go Without Stretch Always Be The
              Best
            </p>
            <button className="bg-red-600 text-white rounded-lg w-44 md:w-60 lg:w-80 h-10 md:h-12 lg:h-16 mt-5">
              START
            </button>
          </div>
          <div className="w-[90%] h-full bg-bullImg bg-cover"></div>
        </div>
      </div>
      <div className="bg-[#0F0B19] h-full w-full text-white">

        <div className="flex w-[100%] md:w-[95%] lg:w-[88%] m-auto max-w-10/12 h-[365px] bg-red-500">
          <div className="flex-1 p-10">
            <h1>ABOUT RED BULL</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
              possimus distinctio ipsa! Cumque, explicabo sint? Quas
              necessitatibus excepturi possimus tempore. Possimus sed voluptatem
              ut quia dolorum beatae sint maiores commodi. Doloremque maxime
              dolor hic. Deserunt, nisi. Voluptate impedit, fugiat nihil
              recusandae porro possimus sit illo eaque labore consequuntur dolor
              consectetur atque minus nostrum
            </p>
            <ul>
              <li>
                <TiTick className="inline rounded" />
                veniam consequat
              </li>
              <li>
                <TiTick className="inline" />
                deserut ullamco est sit
              </li>
              <li>
                <TiTick className="inline" />
                velit officia
              </li>
              <li>
                <TiTick className="inline" />
                est sit aliqua dolor
              </li>
            </ul>
            <button className="bg-red-600 text-white rounded-lg w-24 md:w-30 lg:w-40 h-8 md:h-10 lg:h-12 mt-5">
              GET NOW
            </button>
          </div>
          <div className=" flex-1 relative">
            <div className="border border-white  rounded-xl overflow-hidden absolute right-0 top-0 w-[70%] opacity-50">
              <img src={rec13} alt="" className="" />
            </div>
            <div className="border border-white  rounded-xl overflow-hidden absolute right-0 top-0 w-[80%] -translate-x-3 translate-y-3 opacity-60">
              <img src={rec13} alt="" className="" />
            </div>
            <div className="border border-white  rounded-xl overflow-hidden absolute right-0 top-0 transform w-[90%] -translate-x-6 translate-y-6 ">
              <img src={rec13} alt="" className="" />
            </div>
          </div>
        </div>

        <div className="can-cards flex">
          <div >
              <img src={whiteCan} alt="" />
              <h1>RED BULL WHITE EDITION</h1>
                <p>Wings without sugar: Red Bull Sugarfree is Red Bull Energy Drink without sugar.</p>
                <button className="bg-red-600 text-white rounded-lg w-24 md:w-30 lg:w-40 h-8 md:h-10 lg:h-12 mt-5">
              START
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
