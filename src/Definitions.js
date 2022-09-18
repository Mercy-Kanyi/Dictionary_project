import React from "react"

export default function Definitions(props) {
	if (props.definition) {
	return (
		<div className="Definitions">
			Hello from definitons
		</div>
	)
	} else {
		return (null)
	}
}