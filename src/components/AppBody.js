import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import JobInfoSideBar from "./JobInfoSideBar";
import JobPostings from "./JobPostings";

const AppBody = () => {
  const [filtersData, setFiltersData] = useState([]);
  const [jobsData, setJobsData] = useState([]);
  const [jobsCount, setJobsCount] = useState(0);

  const getFiltersData = async () => {
    try {
      const res = await fetch("/data/filters.json").then((res) => res.json());
      setFiltersData(res);
    } catch (e) {
      console.log("Failed to fetch data from the server.");
    }
  };

  const getJobsData = async () => {
    try {
      const res = await fetch("/data/jobs.json").then((res) => res.json());
      setJobsData(res);
      setJobsCount(
        res.reduce((count, job) => count + job.total_jobs_in_hospital, 0)
      );
    } catch (e) {
      console.log("Failed to fetch data from the server.");
    }
  };

  useEffect(() => {
    getFiltersData();
  }, []);

  useEffect(() => {
    getJobsData();
  }, []);

  return (
    <div className="container mx-auto pt-28 pb-28">
      <div className="mt-4 mx-4">
        <SearchBar></SearchBar>
      </div>
      <div className="flex flex-row ...">
        <div className="mt-4 mx-4">
          <JobInfoSideBar
            JobTypeData={filtersData.job_type}
            DepartmentsData={filtersData.department}
            WorkSchedulesData={filtersData.work_schedule}
            ExperienceData={filtersData.experience}
          ></JobInfoSideBar>
        </div>

        <div className="mt-4 mx-4">
          <JobPostings JobsCount={jobsCount} JobsData={jobsData}></JobPostings>
        </div>
      </div>
    </div>
  );
};

export default AppBody;
