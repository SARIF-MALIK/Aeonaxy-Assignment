import React from "react";
import { FaArrowRight } from "react-icons/fa";
import event1 from "../assets/event1.jpg";
import event2 from "../assets/event2.jpg";
import event3 from "../assets/event3.jpg";
import event4 from "../assets/event4.jpg";
import event5 from "../assets/event5.jpg";
import event6 from "../assets/event6.jpg";
import More from "../assets/More.png";

function Events() {
  return (
    <div className="bg-[#0F0B19] text-white py-24">
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center">
          <h1>EVENTS</h1>
          <div className="h-[2px] w-24 bg-red-500"></div>
        </div>
        <div className="text-center">
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit.
          </p>
        </div>
        <div className="cards pt-10 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[95%]">
          <Card
            img={event1}
            title="Brooklyn Simmons"
            des="Wings without sugar: Red Bull Sugarfree is Red Bull Energy Drink
            without sugar."
          />
          <Card
            img={event2}
            title="Brooklyn Simmons"
            des="Wings without sugar: Red Bull Sugarfree is Red Bull Energy Drink
            without sugar."
            colSpan={2}
          />
          <Card
            img={event3}
            title="Brooklyn Simmons"
            des="Wings without sugar: Red Bull Sugarfree is Red Bull Energy Drink
            without sugar."
          />
          <Card
            img={event4}
            title="Brooklyn Simmons"
            des="Wings without sugar: Red Bull Sugarfree is Red Bull Energy Drink
            without sugar."
          />
          <Card
            img={event5}
            title="Brooklyn Simmons"
            des="Wings without sugar: Red Bull Sugarfree is Red Bull Energy Drink
            without sugar."
          />
          <Card
            img={event6}
            title="Brooklyn Simmons"
            des="Wings without sugar: Red Bull Sugarfree is Red Bull Energy Drink
            without sugar."
            colSpan={2}
          />
          <Card
            img={event1}
            title="Brooklyn Simmons"
            des="Wings without sugar: Red Bull Sugarfree is Red Bull Energy Drink
            without sugar."
          />
        </div>

        <div className="cards pt-10 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[95%] opacity-40 relative ">
          <Card
            img={event3}
            title="Brooklyn Simmons"
            des="Wings without sugar: Red Bull Sugarfree is Red Bull Energy Drink
            without sugar."
          />
          <Card
            img={event4}
            title="Brooklyn Simmons"
            des="Wings without sugar: Red Bull Sugarfree is Red Bull Energy Drink
            without sugar."
          />
          <Card
            img={event5}
            title="Brooklyn Simmons"
            des="Wings without sugar: Red Bull Sugarfree is Red Bull Energy Drink
            without sugar."
          />
          <div className="absolute bottom-0 left-0  w-[100%] h-[220px] ">
            <div className="h-[20%] bg-gradient-to-t from-[#0c0914] to-[transparent]">

            </div>
            <div className="h-[80%] bg-gradient-to-t from-[#0c0914] to-[#0c0914] flex justify-center items-center">
                <div>
                <h1>More</h1>
                    <img src={More} alt="" className=""/>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Card({ img, title, des, colSpan }) {
  return (
    <div
      className={`card h-[310px] relative bg-white text-black rounded-lg ${
        colSpan ? `col-span-${colSpan}` : "col-span-1"
      }`}
    >
      <div className="h-[310px] overflow-hidden rounded-lg">
        <img src={img} alt="athlete" className="w-full h-full object-cover" />
      </div>
      <div className="absolute left-3 bottom-3 text-white w-[50%]">
        <div className="flex flex-col items-center">
          <h1>{title}</h1>
        </div>
        <p>{des}</p>
      </div>
      <button className="bg-red-600 text-white rounded-lg w-16 md:w-20 lg:w-22 h-8 md:h-10 lg:h-12 mt-5 absolute bottom-10 right-3">
        GO <FaArrowRight className="inline" />
      </button>
    </div>
  );
}

export default Events;
