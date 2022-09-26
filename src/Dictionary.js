import React, { useState } from "react";
import axios from "axios";
import Definitions from "./Definitions";
import Photos from "./Photos"
import "./Dictionary.css"

export default function Dictionary(props) {
  let [wordSearched, setWordSearched] = useState(props.defaultWordSearch);
  let [definition, setDefinition] = useState(null);
  let [loaded, setLoaded] = useState(false)
  let [photos, setPhotos] = useState(null)

  function handleDictionaryResponse(response) {
    //console.log(response.data[0]);
    setDefinition(response.data[0]);
  }

  function handlePexelsResponse(response) {
    //console.log(response)
    setPhotos(response.data.photos)
  }
  
  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${wordSearched}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    let pexelsApiKey =
      "563492ad6f9170000100000107f21550cabb472a9a924fefd54999fc";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${wordSearched}&per_page=9`;
    let headers = { Authorization: `Bearer ${pexelsApiKey}` }; 
    axios
      .get(pexelsApiUrl, { headers: headers})
      .then(handlePexelsResponse);
    
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
          <h1>What do you want to look up?</h1>
          <form onSubmit={handleSearch}>
            <input
              type="search"
              autoFocus={true}
              onChange={handleWordChange}
              defaultValue={props.defaultWordSearch}
            />
          </form>
          <div className="hint">
            <strong>Hint:</strong> code, sunset, queen...
          </div>
        </section>
        <Definitions definitions={definition} />
        <Photos photos={photos} />
      </div>
    );
}
  else {
    load();
    return "Loading...";
  }
}
