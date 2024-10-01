import React, { useState, useEffect } from "react";

const SearchFilterWithDebounce = () => {
  const items = [
    "Apple",
    "Banana",
    "Cherry",
    "Date",
    "Eggfruit",
    "Fig",
    "Grapes",
    "Honeydew",
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState(searchTerm);

  // Debounce the search term so filtering doesn't happen on every keystroke
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 300); // Wait for 300ms before applying the filter

    return () => {
      clearTimeout(handler);
    };
  }, [searchTerm]);

  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
  );

  return (
    <div>
      <h2>Search Items with Debounce</h2>
      <input
        type="text"
        placeholder="Search for an item..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul>
        {filteredItems.length > 0 ? (
          filteredItems.map((item, index) => <li key={index}>{item}</li>)
        ) : (
          <li>No items found</li>
        )}
      </ul>
    </div>
  );
};

export default SearchFilterWithDebounce;
