import React, { ChangeEvent } from "react";
import "./Search.scss";

const Search = ({ searchTerm, setSearchTerm }: any) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="search_bar">
      <input
        onChange={handleChange}
        value={searchTerm}
        placeholder="Search for a product"
      />
      {searchTerm.length > 0 && (
        <span className="close_btn" onClick={() => setSearchTerm("")}>
          &#x2715;
        </span>
      )}
    </div>
  );
};

export default Search;
