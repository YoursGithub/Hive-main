"use client";

import React, { useState } from "react";

export default function SearchBar() {
  const [query, setQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Search query:", query);
  };

  return (
    <form onSubmit={handleSearch} className="w-full p-2 max-w-3xl ml-auto mr-5 mt-10">
      <div className="flex border border-gray-300 rounded-full overflow-hidden shadow-sm">
        <input
          type="text"
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-grow px-4 py-2 focus:outline-none text-black"
        />
        <button
          type="submit"
          className="text-black px-6"
        >
          Search
        </button>
      </div>
    </form>
  );
}
