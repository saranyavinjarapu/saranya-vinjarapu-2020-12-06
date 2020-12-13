import React, { useState } from "react";
import HospitalJobDetail from "./HospitalJobDetail";

const HospitalJobList = ({ job }) => {
  const [expanded, setExpanded] = useState(false);
  const NumberOfWeeks = (JobCreatedDate, dateTo = new Date()) => {
    const distanceInMs = Math.abs(
      dateTo - new Date(JobCreatedDate.replace(" ", "T"))
    );
    const seconds = Math.floor(distanceInMs / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    return Math.floor(days / 7);
  };
  return (
    <div>
      <div
        className="border-t-2 border-gray-100 block md:flex justify-between items-center py-4 mt-4 text-gray-700"
        onClick={() => setExpanded(!expanded)}
      >
        <div>
          <div className="font-bold">{job.type}</div>
          <div>
            {job.job_type} | ${job.salary_range[0]} - ${job.salary_range[1]} |{" "}
            {job.city}
          </div>
        </div>
        <div>{NumberOfWeeks(job.created)} weeks ago</div>
      </div>
      {expanded && <HospitalJobDetail job={job} />}
    </div>
  );
};

export default HospitalJobList;
