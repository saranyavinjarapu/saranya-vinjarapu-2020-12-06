import React from 'react';
import JobType from './JobType';
import JobDepartment from './JobDepartment';
import WorkSchedule from './WorkSchedule';
import Experience from './Experience';

const JobInfoSideBar = () => {
  return (
    <div className="relative">
          <JobType></JobType>
          <JobDepartment></JobDepartment>
          <WorkSchedule></WorkSchedule>
          <Experience></Experience>
    </div>
  );
};

export default JobInfoSideBar;
