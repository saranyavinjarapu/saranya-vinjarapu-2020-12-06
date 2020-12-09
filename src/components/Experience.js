import React from "react";

const Experience = ({ ExperienceData }) => {
  return (
    <div className="bg-white p-4 mb-4">
      <p className="font-bold mb-3">DEPARTMENT</p>
      <div>
        {ExperienceData
          ? ExperienceData.map((ExperienceData, index) => (
              <div className="my-2" key={index}>
                <span className="mr-2 text-sm">{ExperienceData.key}</span>
                <span className="text-gray-400 text-xs">
                  {ExperienceData.doc_count.toLocaleString()}
                </span>
              </div>
            ))
          : "Loading..."}
      </div>
    </div>
  );
};

export default Experience;
