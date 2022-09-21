import React from "react"
import Synonyms from "./Synonyms"

export default function Meaning(props) {
	console.log(props.meaning)
	return (
		<div className="Meaning p-3">
			<h4 className="text-capitalize">{props.meaning.partOfSpeech}</h4>
				{props.meaning.definitions.map(function(definition, index) {
					return (
					<p key={index}>
						<strong> - {definition.definition}</strong> <br />
						Example: <em>{definition.example}</em>
						<Synonyms synonyms={definition.synonyms} />
					</p>
					);
				})}
		</div>
	);
}