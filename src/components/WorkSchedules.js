import React from "react";

const WorkSchedule = ({ WorkSchedulesData }) => {
  return (
    <div className="bg-white p-4 mb-4">
      <p className="font-bold mb-3">WORK SCHEDULE</p>
      <div>
        {WorkSchedulesData
          ? WorkSchedulesData.map((WorkSchedulesData, index) => (
              <div className="my-2" key={index}>
                <span className="mr-2 text-sm">{WorkSchedulesData.key}</span>
                <span className="text-gray-400 text-xs">
                  {WorkSchedulesData.doc_count.toLocaleString()}
                </span>
              </div>
            ))
          : "Loading..."}
      </div>
    </div>
  );
};

export default WorkSchedule;
