import React from "react";

import { SearchLogo } from "../../utility/constants";
const Search = () => {
  console.log(SearchLogo)
  return (
    <div>
      <div className="side-nav-icon">
      <SearchLogo/>
        <span>Search</span>
        
      </div>
    </div>
  );
};

export default Search;
