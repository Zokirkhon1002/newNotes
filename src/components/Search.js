import React, { useState } from "react";
import { MdSearch } from "react-icons/md";

const Search = ({ search }) => {
  const [value, setValue] = useState("");

  const title = value.trim()
    ? "Did you find?"
    : "What are you going to search?:)";

  return (
    <div className="search">
      <MdSearch className="search-icons" size="1.5rem" />
      <input
        value={value}
        type="text"
        placeholder="Type to search... "
        title={title}
        onChange={(e) => {
          setValue(e.target.value);
          search(e.target.value);
        }}
      />
    </div>
  );
};

export default Search;
