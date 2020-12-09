import React from "react";
import JobsCard from "./JobsCard";
//import SortOptions from "./SortOptions";

const JobPostings = ({ JobsCount, JobsData }) => {
  return (
    <div className="relative w-full bg-white p-6 mb-4">
      <span className="font-bold">{JobsCount.toLocaleString()} </span>
      <span>Job postings</span>

      <div className="w-full px-4 pt-8 cursor-pointer">
        {JobsData
          ? JobsData.map((job, index) => <JobsCard job={job} key={index} />)
          : "Loading"}
      </div>
    </div>
  );
};

export default JobPostings;
