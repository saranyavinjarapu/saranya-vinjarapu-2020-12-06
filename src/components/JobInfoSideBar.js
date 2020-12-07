import React from "react";
import JobType from "./JobType";
import JobDepartment from "./JobDepartment";
import WorkSchedules from "./WorkSchedules";
import Experience from "./Experience";

const JobInfoSideBar = ({
  JobTypeData,
  DepartmentsData,
  WorkSchedulesData,
  ExperienceData,
}) => {
  return (
    <div className="relative">
      <JobType items={JobTypeData}></JobType>
      <JobDepartment items={DepartmentsData}></JobDepartment>
      <WorkSchedules items={WorkSchedulesData}></WorkSchedules>
      <Experience items={ExperienceData}></Experience>
    </div>
  );
};

export default JobInfoSideBar;
