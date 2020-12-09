import React, { useState } from "react";
import HospitalJobList from "./HospitalJobList";

const JobsCard = ({ job }) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="mb-4">
      <div
        className="flex font-sm items-center justify-left"
        onClick={() => setExpanded(!expanded)}
      >
        <div className="rounded-md bg-gray-400 font-bold text-white py-2 w-10 text-center mr-3">
          {job.name.substr(0, 2).toUpperCase()}
        </div>
        <div>
          {job.total_jobs_in_hospital} jobs for {job.name}
        </div>
      </div>
      {expanded && (
        <div className="border-b-1 border-gray-400">
          {job.items.map((jobs, index) => (
            <HospitalJobList job={jobs} key={index} />
          ))}
        </div>
      )}
    </div>
  );
};

export default JobsCard;
