import React from "react";
import pf1 from "./assets/pr.svg";
const App = () => {
  return (
    <div className="">
      <div>
        <div className="bg-[url(./assets/image.png)] h-30 bg-no-repeat bg-center bg-cover"></div>
      </div>
      <div className="min-h-screen bg-[#EFFAFA]">
        <div className="container items-center flex justify-between gap-7 mx-auto bg-white p-7">
          <div className="">
          </div>
          <div className="">
            <div className="flex gap-3 items-center">
            <img src={pf1} alt="" />
              <p className="text-[#5CA5A5] text-xl font-semibold">Photosnap</p>
              <span className="uppercase px-3 text-sm py-1 text-white font-semibold bg-[#5CA5A5] rounded-2xl">
                New!
              </span>
              <span className="uppercase px-3 text-sm py-1 text-white font-semibold bg-[#2B3939] rounded-2xl">
                Featured
              </span>
            </div>
            <p className="text-[#2B3939] text-3xl font-bold">
              Senior Frontend Developer
            </p>
            <ul className="flex gap-7">
              <li className="text-[#7C8F8F] font-semibold">1d ago</li>
              <li className="text-[#7C8F8F] font-semibold list-disc">Full Time</li>
              <li className="text-[#7C8F8F] font-semibold list-disc">USA only</li>
            </ul>
          </div>

          <div>
            <div className="flex gap-5 *:font-bold *:px-3">
              <p className="text-[#5CA5A5] bg-[#EFF6F6] p-2 rounded">Frontend</p>
              <p className="text-[#5CA5A5] bg-[#EFF6F6] p-2 rounded">Senior</p>
              <p className="text-[#5CA5A5] bg-[#EFF6F6] p-2 rounded">HTML</p>
              <p className="text-[#5CA5A5] bg-[#EFF6F6] p-2 rounded">CSS</p>
              <p className="text-[#5CA5A5] bg-[#EFF6F6] p-2 rounded">JavaScript</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
