import React, { useState } from "react";
import axios from "axios";

export default function Dictionary() {
  let [wordSearched, setWordSearched] = useState("");

  function handleSearch(event) {
    event.preventDefault();
    alert(`searching definition of ${wordSearched}`);

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${wordSearched}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleResponse(response) {
    console.log(response.data);
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
