import React, { useState } from "react";
import axios from "axios";
import Definitions from "./Definitions";

export default function Dictionary() {
  let [wordSearched, setWordSearched] = useState("");
  let [definition, setDefinition] = useState(null);

  function handleResponse(response) {
    //console.log(response.data[0]);
    setDefinition(response.data[0]);
  }

  function handleSearch(event) {
    event.preventDefault();
    //alert(`searching definition of ${wordSearched}`);

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${wordSearched}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleWordChange(event) {
    setWordSearched(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={handleSearch}>
        <input type="search" autoFocus={true} onChange={handleWordChange} />
      </form>
      <Definitions definitions={definition} />
    </div>
  );
}
