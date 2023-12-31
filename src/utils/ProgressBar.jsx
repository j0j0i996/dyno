import React from "react";

const ProgressBar = ({ totalCircles, inProgress }) => {
  return (
    <div className="flex items-center">
      {Array.from({ length: totalCircles }, (_, index) => (
        <React.Fragment key={index}>
          {index > 0 && (
            <div
              className={`h-0.5 w-40 bg-gray-300 ${
                index < inProgress ? "bg-blue-500" : ""
              }`}
            />
          )}
          <div
            className={`h-4 w-4 rounded-full border border-gray-300 ${
              index < inProgress ? "border-blue-500 bg-blue-500" : ""
            }`}
          />
        </React.Fragment>
      ))}
    </div>
  );
};

export default ProgressBar;
