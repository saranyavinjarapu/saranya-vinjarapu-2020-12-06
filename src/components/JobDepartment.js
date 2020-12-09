import React from "react";

const JobDepartment = ({ DepartmentsData }) => {
  return (
    <div className="bg-white p-4 mb-4">
      <p className="font-bold mb-3">DEPARTMENT</p>
      <div>
        {DepartmentsData
          ? DepartmentsData.map((DepartmentsData, index) => (
              <div className="my-2" key={index}>
                <span className="mr-2 text-sm">{DepartmentsData.key}</span>
                <span className="text-gray-400 text-xs">
                  {DepartmentsData.doc_count.toLocaleString()}
                </span>
              </div>
            ))
          : "Loading..."}
      </div>
    </div>
  );
};

export default JobDepartment;
