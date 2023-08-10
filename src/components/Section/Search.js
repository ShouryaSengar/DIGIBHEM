import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

const Search = ({ setshow }) => {
  const navigate = useNavigate();
  const searchref = useRef();
  const handleSearch = (ev) => {
    ev.preventDefault();
    setshow(false);
    navigate(`/products?q=${searchref.current.value}`);
  };
  return (
    <div className="mx-auto max-w-screen-xl my-5 p-2">
      <form className="flex items-center" onSubmit={handleSearch}>
        <div className="relative w-full">
          <span className="bi bi-search flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"></span>

          <input
            ref={searchref}
            type="text"
            name="search"
            id="simple-search"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="search"
          />
        </div>
        <button
          type="submit"
          className="bi bi-search py-2.5 px-3 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
        ></button>
      </form>
    </div>
  );
};

export default Search;
