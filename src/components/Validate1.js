import React, { useState } from "react";

const SearchFilter = () => {
  // Example dataset (could be a large list of items)
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

  // State to track the user's search query
  const [searchTerm, setSearchTerm] = useState("");

  // Filter the items based on the search term
  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(searchTerm.toLowerCase()) // Case-insensitive search
  );

  return (
    <div>
      <h2>Search Items</h2>
      {/* Search input */}
      <input
        type="text"
        placeholder="Search for an item..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)} // Update search term as user types
      />

      {/* Display filtered items */}
      <ul>
        {filteredItems.length > 0 ? (
          filteredItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))
        ) : (
          <li>No items found</li>
        )}
      </ul>
    </div>
  );
};

export default SearchFilter;
