import React from "react";
import rec13 from "../assets/Rectangle 13.jpg";
import { TiTick } from "react-icons/ti";
import whiteCan from "../assets/whiteCan.png";
import whiteCanBG from "../assets/whiteCanBG.png";
import redCan from "../assets/redCan.png";
import redCanBG from "../assets/redCanBG.png";
import blueCan from "../assets/blueCan.png";
import blueCanBG from "../assets/blueCanBg.png";
import playBtn from "../assets/playBtn.png";
import rec31 from "../assets/Rectangle 31.jpg";

function About() {
  return (
    <div>
      <div className="bg-[#0F0B19] w-full text-white flex justify-center items-center pt-14 pb-36">
        <div className="bg-oxbg bg-contain bg-no-repeat pt-14 w-full">
          <div className="flex w-[100%] md:w-[95%] lg:w-[88%] m-auto max-w-10/12 h-[365px]">
            <div className="flex-1 p-10">
              <div className="border-l-2 px-3">
                <h1>ABOUT RED BULL</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
                  possimus distinctio ipsa! Cumque, explicabo sint? Quas
                  necessitatibus excepturi possimus tempore. Possimus sed
                  voluptatem ut quia dolorum beatae sint maiores commodi.
                  Doloremque maxime dolor hic. Deserunt, nisi. Voluptate
                  impedit, fugiat nihil recusandae porro possimus sit illo eaque
                  labore consequuntur dolor consectetur atque minus nostrum
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

          <div className="can-cards flex w-[80%] m-auto justify-between mt-96 relative">
            <div className="max-w-[352px] max-h-[505px] bg-slate-500 relative flex flex-col justify-center items-center rounded-lg ">
              <img src={whiteCan} alt="" className="absolute -top-44" />
              <img src={whiteCanBG} alt="" />
              <div className="my-10 flex justify-center flex-col items-center text-center">
                <h1>RED BULL WHITE EDITION</h1>
                <p>
                  Wings without sugar: Red Bull Sugarfree is Red Bull Energy
                  Drink without sugar.
                </p>
                <button className="bg-red-600 text-white rounded-lg w-24 md:w-30 lg:w-40 h-8 md:h-10 lg:h-12 mt-5">
                  START
                </button>
              </div>
            </div>
            <div className="max-w-[352px] max-h-[505px] bg-slate-500 flex-col justify-center items-center absolute -top-28 left-[35%] rounded-lg hidden lg:flex">
              <img src={redCan} alt="" className="absolute -top-44 " />
              <img src={redCanBG} alt="" className="h-[215px]" />
              <div className="my-10 flex justify-center flex-col items-center text-center">
                <h1>RED BULL WHITE EDITION</h1>
                <p>
                  Wings without sugar: Red Bull Sugarfree is Red Bull Energy
                  Drink without sugar.
                </p>
                <button className="bg-red-600 text-white rounded-lg w-24 md:w-30 lg:w-40 h-8 md:h-10 lg:h-12 mt-5">
                  START
                </button>
              </div>
            </div>
            <div className="max-w-[352px] max-h-[555px] bg-slate-500 relative flex-col justify-center items-center rounded-lg hidden md:flex">
              <img src={blueCan} alt="" className="absolute -top-44" />
              <img src={blueCanBG} alt="" />
              <div className="my-10 flex justify-center flex-col items-center text-center">
                <h1>RED BULL WHITE EDITION</h1>
                <p>
                  Wings without sugar: Red Bull Sugarfree is Red Bull Energy
                  Drink without sugar.
                </p>
                <button className="bg-red-600 text-white rounded-lg w-24 md:w-30 lg:w-40 h-8 md:h-10 lg:h-12 mt-5">
                  START
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="power bg-[#0F0B19]">
        <div className="w-[95%] m-auto overflow-hidden pt-36 bg-power bg-no-repeat pb-10">
          <div className="relative rounded-lg overflow-hidden">
            <img src={rec31} alt="" />
            <img
              src={playBtn}
              alt=""
              className="absolute top-[40%] left-[43%] w-20 md:w-36"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
