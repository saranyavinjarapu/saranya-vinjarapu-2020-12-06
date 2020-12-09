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
      <JobType JobTypeData={JobTypeData}></JobType>
      <JobDepartment DepartmentsData={DepartmentsData}></JobDepartment>
      <WorkSchedules WorkSchedulesData={WorkSchedulesData}></WorkSchedules>
      <Experience ExperienceData={ExperienceData}></Experience>
    </div>
  );
};

export default JobInfoSideBar;
