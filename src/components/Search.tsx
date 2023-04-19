import React from "react";
import { SearchBox } from "./SearchBox";

export const Search = (props: {
  handleChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
}): JSX.Element => {
  return (
    <div>
      <input
        className="search-box w-full rounded-md border pt-2 border-black"
        type="search"
        placeholder="search..."
        onChange={props.handleChange}
      />
    </div>
  );
};
