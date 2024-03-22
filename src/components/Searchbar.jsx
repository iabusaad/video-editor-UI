import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { MdOutlineCancel } from "react-icons/md";

const SearchBar = () => {
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
      event.preventDefault();
    console.log("Search:", query);
  };

  return (
    <form onSubmit={handleSubmit} className="relative">
      <div className="flex items-center justify-between shadow-lg">
        <div>
          <input
            type="text"
            placeholder="Search..."
            value={query}
            onChange={handleInputChange}
            className="w-64 px-16 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-gray-500 placeholder-gray-500"
          />
          <button
            type="submit"
            className="absolute pl-8 left-0 top-0 mt-3 mr-4"
          >
            <FiSearch className="h-6 w-6 text-gray-400" />
          </button>
              </div>
              <MdOutlineCancel
                  className="absolute text-2xl left-52 text-gray-500"
              />
      </div>
    </form>
  );
};

export default SearchBar;



