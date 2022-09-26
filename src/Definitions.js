import React from "react";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";
import "./Definitions.css"

export default function Definitions(props) {
  if (props.definitions) {
    return (
      <div className="Definitions">
        <section>
          <h2>{props.definitions.word}</h2>
          {props.definitions.phonetics.map(function (phonetic, index) {
            return (
              <div key={index}>
                <Phonetics phonetics={phonetic} />
              </div>
            );
          })}
        </section>
        {props.definitions.meanings.map(function (meaning, index) {
          return (
            <section key={index}>
              <Meaning meaning={meaning} />
            </section>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
