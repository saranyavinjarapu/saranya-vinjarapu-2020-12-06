import React from "react";

const SortOptions = () => {
  return (
    <div className="hidden lg:block space-x-6 flex justify-between">
      <span className="text-gray-400">Sort by</span>
      <button label="Location" />
      <button label="Role" />
      <button label="Department" />
      <button label="Education" />
      <button label="Experience" />
    </div>
  );
};

export default SortOptions;
