import React from "react";
import SearchBar from './SearchBar';
import JobInfoSideBar from './JobInfoSideBar';

const AppBody = () => {
    return (
        <div className="container mx-auto pt-28 pb-28">
          <div className = "mt-4 mx-4">
            <SearchBar></SearchBar> 
          </div> 
          <div className = "mt-4 mx-4">
            <JobInfoSideBar></JobInfoSideBar> 
          </div>           
        </div>        
    );
};

export default AppBody;


