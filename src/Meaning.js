import React from "react"

export default function Meaning(props) {
	//console.log(props.meaning)
	return (
		<div className="Meaning p-3">
			<h4 className="text-capitalize">{props.meaning.partOfSpeech}</h4>
				{props.meaning.definitions.map(function(definition, index) {
					return (
					<div key={index}>
						<strong> - {definition.definition}</strong> <br />
						Example: <em>{definition.example}</em>
					</div>
					);
				})}
		</div>
	);
}