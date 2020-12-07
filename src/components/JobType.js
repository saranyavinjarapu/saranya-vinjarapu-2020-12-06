import React from "react";

const JobType = ({ items }) => {
  return (
    <div className="bg-white p-4 mb-4">
      <p className="font-bold mb-3">JOB TYPE</p>
      <div>
        {items
          ? items.map((item, index) => (
              <div className="my-2" key={index}>
                <span className="mr-2 text-sm">{item.key}</span>
                <span className="text-gray-400 text-xs">
                  {item.doc_count.toLocaleString()}
                </span>
              </div>
            ))
          : "Loading..."}
      </div>
    </div>
  );
};

export default JobType;
