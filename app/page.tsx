"use client";
import Image from "next/image";
import { useState } from "react";
import bgImg1 from "../public/bg-bottom.svg";
import bgImg2 from "../public/bg-top.svg";
import CardComponent from "./CardComponent";

export default function Home() {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <main className="bg-clr-200 flex min-h-screen flex-col items-center justify-center font-bold">
      <div className="relative rounded-xl shadow-md md:w-[80%] md:max-w-[980px] md:min-h-[600px] border border-clr-400 grid grid-rows-6 p-7">
        <div className="row-span-1 flex justify-center items-center flex-col gap-5 z-10">
          <h1 className="text-lg">Our Pricing</h1>
          <div className="flex justify-center items-center gap-5">
            <p className="text-sm">Annually</p>
            <div className="w-10 h-6 shadow-2xl rounded-2xl">
              <input
                type="checkbox"
                id="checkbox"
                checked={toggle}
                onChange={handleToggle}
                className="hidden"
              />
              <label
                htmlFor="checkbox"
                className={`w-full h-full block rounded-2xl relative shadow-lg border transition-colors duration-1000 ${
                  toggle
                    ? "bg-gradientClr border-clr-200"
                    : "bg-clr-200 border-clr-400"
                }`}
              >
                <span
                  className={`w-[45%] h-[80%] rounded-2xl transition-all duration-300 ${
                    toggle
                      ? "bottom-[10%] translate-x-[105%] bg-clr-200"
                      : "translate-x-[15%] top-[10%] bg-gradientClr"
                  } absolute `}
                ></span>
              </label>
            </div>
            <p className="text-sm">Monthly</p>
          </div>
        </div>
        <div className="row-span-5 bg-clr-200 z-10 flex">
          <CardComponent size={"small"} />
          <CardComponent size={"large"}/>
        </div>

        <div className="absolute w-[300px] right-0 top-0 z-0">
          <Image src={bgImg2} alt="" className="absolute right-0 top-0" />
        </div>
        <div className="absolute w-[350px] left-0 bottom-0">
          <Image src={bgImg1} alt="" className="absolute left-0 bottom-0 z-0" />
        </div>
      </div>
    </main>
  );
}
