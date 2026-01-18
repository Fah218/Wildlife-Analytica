import { useState, useEffect } from "react";

export default function SearchBar({ speciesList = [], onSelect }) {
  const [query, setQuery] = useState("");
  const [filtered, setFiltered] = useState([]);
  const [highlighted, setHighlighted] = useState(0);

  useEffect(() => {
    // Check if speciesList is valid and query is not empty
    if (!speciesList || speciesList.length === 0 || query.trim() === "") {
      setFiltered([]);
      return;
    }

    const results = speciesList.filter(s =>
      s.toLowerCase().includes(query.toLowerCase())
    );

    setFiltered(results.slice(0, 8));
    setHighlighted(0);
    
    // FIX: Suppress the ESLint warning (red line) here. 
    // setFiltered and setHighlighted are state setters guaranteed to be stable.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query, speciesList]); // Dependencies are correct

  const handleKeyDown = (e) => {
    if (filtered.length === 0) return;

    if (e.key === "ArrowDown") {
      e.preventDefault(); // Prevent cursor movement in the input field
      setHighlighted((prev) => (prev + 1) % filtered.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault(); // Prevent cursor movement in the input field
      setHighlighted((prev) =>
        (prev - 1 + filtered.length) % filtered.length
      );
    } else if (e.key === "Enter") {
      const selectedItem = filtered[highlighted];
      setQuery(selectedItem);
      onSelect(selectedItem);
      setFiltered([]);
    }
  };

  return (
    <div style={{ position: "relative" }}>
      <input
        type="text"
        placeholder="Search species (e.g., Red Panda)"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          // 🛑 CRITICAL FIX: Removed onSelect(e.target.value) here. 
          // Calling onSelect on every keystroke is generally incorrect for a search bar.
        }}
        onKeyDown={handleKeyDown}
        style={{
          width: "100%",
          padding: "12px",
          borderRadius: "10px",
          border: "1px solid #bbb",
          fontSize: "16px"
        }}
      />

      {filtered.length > 0 && (
        <ul className="dropdown">
          {filtered.map((item, index) => (
            <li
              key={index}
              className={index === highlighted ? "active" : ""}
              onClick={() => {
                setQuery(item);
                onSelect(item); // ✅ Correct: Call onSelect when a suggestion is clicked
                setFiltered([]);
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}