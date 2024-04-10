import React, { useState } from "react";
import "./about.css";
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
  const [expanded, setExpanded] = useState(false);
  const toggleExpanded = () => {
    setExpanded(!expanded);
  };
  return (
    <div>
      <div className="bg-[#0F0B19] w-full text-white flex justify-center items-center pt-14 pb-36">
        <div className="bg-oxbg bg-contain bg-no-repeat pt-14 w-full">
          <div className="flex w-[100%] md:w-[95%] lg:w-[88%] m-auto max-w-10/12 h-[365px]">
            <div className="flex-1 p-10">
              <div className="border-l-2 px-3">
                <h1 className="font-inter font-medium text-6xl pb-5 ">
                  ABOUT <span className="text-red-500">RED</span> BULL
                </h1>
                <div>
                  <div
                    className={`line-clamp-3 overflow-hidden ${
                      expanded ? "line-clamp-none" : ""
                    }`}
                  >
                    <p className="">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Esse possimus distinctio ipsa! Cumque, explicabo sint?
                      Quas necessitatibus excepturi possimus tempore. Possimus
                      sed voluptatem ut quia dolorum beatae sint maiores
                      commodi. Doloremque maxime dolor hic. Deserunt, nisi.
                      Voluptate impedit, fugiat nihil recusandae porro possimus
                      sit illo eaque labore consequuntur dolor consectetur atque
                      minus nostrum Lorem ipsum dolor sit amet consectetur
                      adipisicing elit. Hic qui iusto quibusdam aliquid ad quis,
                      ipsa officia recusandae! Esse perferendis aliquam
                      inventore accusantium architecto reprehenderit molestias
                      excepturi repudiandae ducimus quasi!
                    </p>
                  </div>
                  {!expanded && (
                    <button
                      onClick={toggleExpanded}
                      className="text-red-500 hover:underline"
                    >
                      more...
                    </button>
                  )}
                </div>
                <ul>
                  <li>
                    <TiTick className="inline rounded-full bg-green-300 text-white mr-2" />
                    veniam consequat
                  </li>
                  <li>
                    <TiTick className="inline rounded-full bg-green-300 text-white mr-2" />
                    deserut ullamco est sit
                  </li>
                  <li>
                    <TiTick className="inline rounded-full bg-green-300 text-white mr-2" />
                    velit officia
                  </li>
                  <li>
                    <TiTick className="inline rounded-full bg-green-300 text-white mr-2" />
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

          <div className="can-cards flex w-[95%] md:w-[85%] flex-wrap md:flex-nowrap lg:w-[85%] m-auto justify-center md:justify-between mt-96 relative">
            <Card canImg={whiteCan} canBG={whiteCanBG} title={"RED BULL WHITE EDITION"} btnClr={"#3B63AC"} other={"mb-44 md:my-0"}/>
            <Card canImg={redCan} canBG={redCanBG} title={"RED BULL ENERGY DRINK"} btnClr={"#DF424C"} other={"absolute -top-28 hidden lg:flex"}/>
            <Card canImg={blueCan} canBG={blueCanBG} title={"RED BULL SUGAR FREE"} btnClr={'#0085C7'}/>

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

function Card({canImg, canBG, title, btnClr, other }){
  return(
    <div className= {`max-w-[352px] max-h-[505px] bg-white relative flex flex-col justify-center items-center rounded-lg ${other}`}>
    <img src={canImg} alt="" className="absolute -top-44" />
    <img src={canBG} alt="" />
    <div className="my-10 flex justify-center flex-col items-center text-center text-[#414549]">
      <h1 className="font-inter font-bold text-2xl ">{title}</h1>
      <p>
        Wings without sugar: Red Bull Sugarfree is Red Bull Energy
        Drink without sugar.
      </p>
      <button style={{ backgroundColor: btnClr }} className= {`bg-red-500 text-white rounded-lg w-24 md:w-30 lg:w-40 h-8 md:h-10 lg:h-12 mt-5`}>
        LEARN MORE
      </button>
    </div>
  </div>
  )
}

export default About;
