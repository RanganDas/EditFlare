import React, { useState } from "react";
import "./App2.css";
import LexendRegular from '../fonts/Lexend-Regular.ttf';


export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleCopyClick = () => {
    var innerText = document.getElementById("myBox");
    innerText.select();
    navigator.clipboard
      .writeText(innerText.value)
      .then(() => {
        alert("Text copied to clipboard!");
      })
      .catch((err) => {
        console.error("Error copying text: ", err);
      });
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[  ]+/);
    setText(newText.join(" "));
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const stopWords = [
    "a",
    "an",
    "the",
    "and",
    "but",
    "or",
    "in",
    "on",
    "at",
    "to",
    "for",
    "by",
    "with",
    "as",
    "of",
    "from",
    "is",
    "it",
    "was",
    "were",
    
  ];
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "Dark" ? "white" : "black", fontFamily: LexendRegular, fontSize: 20 }}
      >
        <div className="mb-3">
          <h1>{props.heading}</h1>
          <div className="container">
          </div>
          <br />
          <textarea
            style={{
              backgroundColor: props.mode === "Dark" ? "#0c0c0c" : "white",
              color: props.mode === "Dark" ? "white" : "black",  fontFamily: LexendRegular, fontSize: 20
            }}
            className="form-control"
            value={text}
            placeholder="Enter something"
            onChange={handleOnChange}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button
          className={`btn btn-${props.buttonMode} mx-2 my-2`}
          onClick={handleUpClick}
        >
          Convert to uppercase
        </button>
        <button
          className={`btn btn-${props.buttonMode} mx-2 my-2`}
          onClick={handleLowClick}
        >
          Convert to lowercase
        </button>
        <button
          className={`btn btn-${props.buttonMode} mx-2 my-2`}
          onClick={handleCopyClick}
        >
          Copy to Clipboard
        </button>
        <button
          className={`btn btn-${props.buttonMode} mx-2 my-2`}
          onClick={handleExtraSpaces}
        >
          Remove Extra Spaces
        </button>
      </div>

      <div
        className="container my-4"
        style={{ color: props.mode === "Dark" ? "white" : "black" , fontFamily: LexendRegular, fontSize: 20}}
      >
        <h1>Text Summary</h1>
        
        <br />
        <p className="border border-secondary p-3">
          Number of words: {text.trim().split(/\s+/).filter(Boolean).length}
          <br />
          Number of characters: {text.length}
          <br />
          Number of spaces: {text.split(" ").length - 1}
          <br />
          Number of total numerical characters present (1-9):{" "}
          {text.replace(/[^0-9]/g, "").length}
          <br />
          Number of total alphabetic characters present (A-Z):{" "}
          {text.replace(/[^a-zA-Z]/g, "").length}
          <br />
          Number of special characters present:{" "}
          {text.replace(/[a-zA-Z0-9\s]/g, "").length}
          <br />
          Hard Words: {text.split(" ").filter((word) => word.length > 6).length}
          <br />
          Long Words:{" "}
          {text.split(" ").filter((word) => word.length > 10).length}
          <br />
          Lexical Density:{" "}
          {((text.split(" ").length / text.length) * 100).toFixed(2)}
          <br />
          Lexical Density (without Stop Words):{" "}
          {(
            ((text.split(" ").length -
              text
                .split(" ")
                .filter((word) => stopWords.includes(word.toLowerCase()))
                .length) /
              text.length) *
            100
          ).toFixed(2)}
          <br />
          Gunning Fog Index:{" "}
          {(
            0.4 *
            (text.split(" ").length / text.split(/[.!?]/).length +
              100 *
                (text.split(" ").filter((word) => word.length > 6).length /
                  text.split(" ").length))
          ).toFixed(2)}
          <br />
          Coleman-Liau Grade:{" "}
          {(
            0.0588 *
              ((text.replace(/[^a-zA-Z]/g, "").length /
                text.split(" ").length) *
                100) -
            0.296 *
              ((text.split(/[.!?]/).length / text.split(" ").length) * 100) -
            15.8
          ).toFixed(2)}
          <br />
          Flesch-Kincaid Grade Level:{" "}
          {(
            0.39 *
              ((text.split(/[.!?]/).length / text.split(" ").length) * 100) -
            11.8 *
              ((text.split(" ").filter((word) => word.length > 1).length /
                text.split(" ").length) *
                100) -
            15.59
          ).toFixed(2)}
          <br />
          Flesch Reading Ease:{" "}
          {(
            206.835 -
            1.015 *
              ((text.split(" ").filter((word) => word.length > 1).length /
                text.split(/[.!?]/).length) *
                100) -
            84.6 *
              ((text.split(" ").filter((word) => word.length > 1).length /
                text.split(" ").length) *
                100)
          ).toFixed(2)}
          <br />
          ARI (Automated Readability Index):{" "}
          {(
            4.71 * ((text.length / text.split(" ").length) * 100) +
            0.5 *
              ((text.split(/[.!?]/).length / text.split(" ").length) * 100) -
            21.43
          ).toFixed(2)}
          <br />
          SMOG Grade:{" "}
          {Math.sqrt(
            text.split(" ").filter((word) => word.length > 2).length *
              ((30 / text.split(/[.!?]/).length) * 100) +
              3
          ).toFixed(2)}
          <br />
          LIX (Laesbarhedsindex):{" "}
          {(
            (text.split(" ").filter((word) => word.length > 6).length +
              text.split(" ").filter((word) => word.length > 6).length) /
              text.split(/[.!?]/).length +
            100 *
              (text.split(" ").filter((word) => word.length > 6).length /
                text.split(" ").length)
          ).toFixed(2)}
        </p>
      </div>

      <div
        className="container my-4"
        style={{ color: props.mode === "Dark" ? "white" : "black" , fontFamily: LexendRegular, fontSize: 20}}
      >
        <h1>Preview</h1>
  

        <br />
        <p className="border border-secondary p-3"> {text.length > 0 ? text : "Please enter something to preview"}</p>
      </div>
    </>
  );
}
