import React from "react";

const SearchInput = ({ search, setSearch }) => {
  const handleInput = (e) => {
    setSearch(e.target.value);
  };
  return (
    <div>
      <input
        type='text'
        placeholder='Search Pokemon'
        value={search}
        onChange={handleInput}
      />
    </div>
  );
};

export default SearchInput;
