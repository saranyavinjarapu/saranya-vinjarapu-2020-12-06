import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import JobInfoSideBar from "./JobInfoSideBar";

const AppBody = () => {
  const [filtersData, setFiltersData] = useState([]);
  const getFiltersData = async () => {
    try {
      const response = await fetch("/data/filters.json").then((response) =>
        response.json()
      );
      setFiltersData(response);
    } catch (e) {
      console.log("Failed to fetch data from the server.");
    }
  };

  useEffect(() => {
    getFiltersData();
  }, []);

  return (
    <div className="container mx-auto pt-28 pb-28">
      <div className="mt-4 mx-4">
        <SearchBar></SearchBar>
      </div>
      <div className="mt-4 mx-4">
        <JobInfoSideBar
          JobTypeData={filtersData.job_type}
          DepartmentsData={filtersData.department}
          WorkSchedulesData={filtersData.work_schedule}
          ExperienceData={filtersData.experience}
        ></JobInfoSideBar>
      </div>
    </div>
  );
};

export default AppBody;
