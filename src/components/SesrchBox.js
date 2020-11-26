import React, { useState } from "react";

const SearchBox = ({ history }) => {
  const [keyword, setKeyword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      history.push(`/search/${keyword}`);
    } else {
      history.push("/");
    }
  };

  return (
    <form onSubmit={submitHandler} inline>
      <div className="box">
        <div className="search_container">
          <input
            type="search"
            id="search"
            onChange={(e) => setKeyword(e.target.value)}
            placeholder="Search..."
          />
          <button type="submit" className="icon">
            <i class="fa fa-search"></i>
          </button>
        </div>
      </div>
    </form>
  );
};

export default SearchBox;
