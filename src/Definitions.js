import React from "react"
import Meaning from "./Meaning"
import Phonetics from "./Phonetics"

export default function Definitions(props) {
	if (props.definitions) {
		//console.log(props.definitions);
	return (
		
		<div className="Definitions">
			<h2>
				{props.definitions.word}
			</h2>
			{props.definitions.phonetics.map(function(phonetic, index) {
				return (
					<div key={index}>
						<Phonetics phonetics={phonetic} />
					</div>
				)
			})}
			{props.definitions.meanings.map(function(meaning, index) {
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