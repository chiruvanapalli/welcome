import React from "react";
import "./NoResultsFound.scss";

const NoResultsFound = ({ searchTerm }: any) => {
  return (
    <div className="no_results">
      <h2>No Results Found</h2>
      <p>
        Try a different keyword or explore our popular “Pizza”, “Biryani”, or
        “South Indian” instead?
      </p>
    </div>
  );
};

export default NoResultsFound;
