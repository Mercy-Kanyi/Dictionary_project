import React, { useState } from "react";
import axios from "axios";
import Definitions from "./Definitions";
import "./Dictionary.css"

export default function Dictionary(props) {
  let [wordSearched, setWordSearched] = useState(props.defaultWordSearch);
  let [definition, setDefinition] = useState(null);
  let [loaded, setLoaded] = useState(false)

  function handleResponse(response) {
    //console.log(response.data[0]);
    setDefinition(response.data[0]);
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${wordSearched}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSearch(event) {
    event.preventDefault();
    search();

  }

  function load(){
    setLoaded(true)
    search();
  }

  function handleWordChange(event) {
    setWordSearched(event.target.value);
  }

  if (loaded) {
    return (
    <div className="Dictionary">
      <section>
        <form onSubmit={handleSearch}>
          <input type="search" autoFocus={true} onChange={handleWordChange} />
        </form>
        <div className="hint">
          <strong>Hint:</strong> code, sunset, queen...
        </div>
      </section>
      <Definitions definitions={definition} />
    </div>
  );
}
  else {
    load();
    return "Loading...";
  }
}
