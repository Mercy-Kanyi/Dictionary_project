import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css"
export default function Meaning(props) {
  //console.log(props.meaning)
  return (
    <div className="Meaning p-3">
      <h4 className="text-capitalize">{props.meaning.partOfSpeech}</h4>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p className="definition"> {definition.definition}
            </p>
            <p className="example">
              {definition.example}
            </p>
            <Synonyms synonyms={definition.synonyms} />
          </div>
        );
      })}
    </div>
  );
}
