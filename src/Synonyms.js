import React from "react";
import "./Synonyms.css"

export default function Synonyms(props) {
  if (props.synonyms.length) {
    return (
	<ul className="Synonyms p-1">
		
		{props.synonyms.map(function(synonyms, index) {
			return (
				<li key={index}>
					{synonyms}
				</li>
			)
		})}
	</ul>);
  } else {
	return null
  }
}
