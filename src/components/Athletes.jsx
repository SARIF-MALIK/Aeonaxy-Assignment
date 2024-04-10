import React from "react";
import athelete1 from "../assets/athlete1.jpg";
import athelete2 from "../assets/athlete2.jpg";
import athelete3 from "../assets/athlete3.jpg";

function Athletes() {
  return (
    <div className="bg-[#0F0B19] text-white py-24">
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center">
          <h1>ATHLETES</h1>
          <div className="h-[2px] w-24 bg-red-500"></div>
        </div>
        <div className="text-center">
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit.{" "}
          </p>
        </div>
        <div className="cards pt-60 flex gap-5 flex-wrap">
          <Card
            img={athelete1}
            title="Brooklyn Simmons"
            des="Wings without sugar: Red Bull Sugarfree is Red Bull Energy Drink
            without sugar."
          />
          <Card
            img={athelete1}
            title="Brooklyn Simmons"
            des="Wings without sugar: Red Bull Sugarfree is Red Bull Energy Drink
            without sugar."
          />
          <Card
            img={athelete1}
            title="Brooklyn Simmons"
            des="Wings without sugar: Red Bull Sugarfree is Red Bull Energy Drink
            without sugar."
          />
          <Card
            img={athelete1}
            title="Brooklyn Simmons"
            des="Wings without sugar: Red Bull Sugarfree is Red Bull Energy Drink
            without sugar."
          />
        </div>
      </div>
    </div>
  );
}

function Card({ img, title, des }) {
  return (
    <div className="card h-[410px] w-[340px] relative bg-white text-black rounded-lg flex flex-col items-center text-center">
      <div className="h-[40%] w-full"></div>
      <div className="w-[250px] h-[310px] overflow-hidden absolute -top-48 left-[13%] rounded-lg">
        <img src={img} alt="athlete" className="w-full h-full object-cover" />
      </div>
      <div className="">
        <div className="flex flex-col items-center">
          <h1>{title}</h1>
          <div className="h-[2px] w-24 bg-red-500"></div>
        </div>
        <p>{des}</p>
      </div>
      <button className="bg-red-600 text-white rounded-lg w-24 md:w-30 lg:w-40 h-8 md:h-10 lg:h-12 mt-5 absolute bottom-10">
        LEARN MORE
      </button>
    </div>
  );
}

export default Athletes;
