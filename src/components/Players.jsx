import React from "react";
import jobData from "../jobs.json";

const Players = () => {
  return (
    <div className="">
      {jobData.map((job, index) => (
        <div className="">
          <div className="border-2 cursor-pointer hover:shadow-xl transition-all flex justify-between items-center p-5 w-full mb-2 backdrop-blur-lg text-white border-black">
            <div>
              <p>{job.club}</p>
              <p>{job.name}</p>
              <ul className="flex gap-5 items-center ">
                <li className="">{job.position}</li>
                <span className="h-1 w-1 bg-white rounded-full"></span>
                <li>{job.number} number </li>
                <span className="h-1 w-1 bg-white rounded-full"></span>
                <li>{job.contract}</li>
              </ul>
            </div>
            <div>
              <div className="flex gap-4 *:border items-center">
                {job.oldclubs.map((club, index) => (
                  <p
                    key={index}
                    className="py-2 px-4 active:scale-95 select-none rounded-md"
                  >
                    {club}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Players;
