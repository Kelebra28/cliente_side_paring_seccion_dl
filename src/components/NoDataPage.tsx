import React from "react";

export const NoDataPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-t from-gray-600 via-gray-700 to-gray-800 flex justify-center items-center flex-col text-white">
      <h1 className="text-4xl font-bold mb-4">No Data Available</h1>
      <p className="text-lg mb-8">
        Sorry, there is no data to display at the moment.
      </p>
    </div>
  );
};
