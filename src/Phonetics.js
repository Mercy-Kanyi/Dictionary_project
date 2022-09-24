import React from "react";
import ReactAudioPlayer from "react-audio-player";
import "./Phonetics.css"

export default function Phonetics(props) {
  if (props.phonetics.audio) {
	return (
    <div className="Phonetics">
      <span className="text">{props.phonetics.text}</span>
      <div className="audio"><ReactAudioPlayer src={props.phonetics.audio} controls /> </div>
    </div>
  );} else {
    return (
      <span className="text">{props.phonetics.text}</span>
    );
  }
}