import React from "react";

const Search = ({value,setValue,search,found}) => {
    const handleChange = (e) => {
        setValue(e.target.value.trim())
    }
  return (
    <div className="flex w-full max-w-xl space-x-3 sm:space-x-5 px-3 rounded-lg py-2 shadow-lg items-center mt-6 bg-white dark:bg-[#1e2a47]">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8 hidden sm:block text-indigo-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
      <input className="bg-transparent grow font-semibold placeholder:font-normal dark:text-white dark:placeholder-white  outline-none caret-blue-600" placeholder="Search GitHub username" value={value} onChange={handleChange}/>
      <button className={`text-white font-semibold text-base  active:scale-95 rounded-xl py-3 px-5 ${found ? "bg-blue-600 hover:bg-blue-500" : "animate-shake bg-red-400 hover:bg-red-300"}`} onClick={() => search(value)}>Search</button>
    </div>
  );
};

export default Search;
