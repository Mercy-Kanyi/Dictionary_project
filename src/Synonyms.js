import React from "react";

export default function Synonyms(props) {
  if (props.synonyms.length) {
    return (
	<ul className="Synonyms">
		Synonyms: {props.synonyms.map(function(synonyms, index) {
			return (
				<li>
					{synonyms}
				</li>
			)
		})}
	</ul>);
  } else {
	return null
  }
}

