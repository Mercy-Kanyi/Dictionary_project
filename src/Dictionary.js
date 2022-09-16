import React, { useState } from "react";

export default function Dictionary() {
  let [wordSearched, setWordSearched] = useState("");

  function handleSearch(event) {
    event.preventDefault();
    alert(`searching definition of ${wordSearched}`);
  }

  function handleWordChange(event) {
    setWordSearched(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={handleSearch}>
        <input type="search" autoFocus={true} onChange={handleWordChange} />
      </form>
    </div>
  );
}
