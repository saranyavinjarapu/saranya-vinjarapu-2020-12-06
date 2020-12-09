import React from "react";

const JobType = ({ JobTypeData }) => {
  return (
    <div className="bg-white p-4 mb-4">
      <p className="font-bold mb-3">JOB TYPE</p>
      <div>
        {JobTypeData
          ? JobTypeData.map((JobTypeData, index) => (
              <div className="my-2" key={index}>
                <span className="mr-2 text-sm">{JobTypeData.key}</span>
                <span className="text-gray-400 text-xs">
                  {JobTypeData.doc_count.toLocaleString()}
                </span>
              </div>
            ))
          : "Loading..."}
      </div>
    </div>
  );
};

export default JobType;
