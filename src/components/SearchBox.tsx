import React from "react";
import { useState } from "react";
import { Search } from "./Search";

export const SearchBox = () => {
  const [searchInput, setSearchInput] = useState("");

  const Bairlii = [{ name: "Belgium", continent: "Europe" }];

  const handleChange = (e: {
    preventDefault: () => void;
    target: { value: React.SetStateAction<string> };
  }): any => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  if (searchInput.length > 0) {
    Bairlii.filter((Bairlii) => {
      return Bairlii.name.match(searchInput);
    });

    return (
      <div>
        <input
          type="search"
          placeholder="Search here"
          onChange={handleChange}
          value={searchInput}
        />
      </div>
    );
  }
};
