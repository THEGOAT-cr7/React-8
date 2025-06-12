import React from "react";
import pf1 from "./assets/pr.svg";
import jobData from "./jobs.json";

const App = () => {
  return (
    <div>
      <div>
        <div className="bg-[url(./assets/image.png)] h-30 bg-no-repeat bg-center bg-cover"></div>
      </div>
      <div className="min-h-screen bg-[#EFFAFA]">
        {jobData.map((job, index) => (
          <div
            key={index}
            className="container items-center flex justify-between gap-7 mx-auto bg-white p-7"
          >
            <div>
              <div className="flex gap-3 items-center">
                <img src={pf1} alt={`${job.company} logo`} />
                <p className="text-[#5CA5A5] text-xl font-semibold">
                  {job.company}
                </p>
                {job.isNew && (
                  <span className="uppercase px-3 text-sm py-1 text-white font-semibold bg-[#5CA5A5] rounded-2xl">
                    New
                  </span>
                )}
                {job.isFeatured && (
                  <span className="uppercase px-3 text-sm py-1 text-white font-semibold bg-[#2B3939] rounded-2xl">
                    Featured
                  </span>
                )}
              </div>
              <p className="text-[#2B3939] text-3xl font-bold">{job.title}</p>
              <ul className="flex gap-7">
                <li className="text-[#7C8F8F] font-semibold">{job.posted}</li>
                <li className="text-[#7C8F8F] font-semibold list-disc">
                  {job.type}
                </li>
                <li className="text-[#7C8F8F] font-semibold list-disc">
                  {job.location}
                </li>
              </ul>
            </div>
            <div>
              <div className="flex gap-5 *:font-bold *:px-3">
                {job.skills.map((skill, skillIndex) => (
                  <p
                    key={skillIndex}
                    className="text-[#5CA5A5] bg-[#EFF6F6] p-2 rounded"
                  >
                    {skill}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
