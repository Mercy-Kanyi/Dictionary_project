import React from "react"
import Meaning from "./Meaning"

export default function Definitions(props) {
	if (props.definitions) {
	return (
		<div className="Definitions">
			<h2>
				{props.definitions.word}
			</h2>
			{props.definitions.meanings[0].definitions.map(function(meaning, index) {
				return (
					<div key={index}>
						<Meaning meaning={meaning}/>
					</div>
				);
			})}
		</div>
	)
	} else {
		return (null)
	}
}