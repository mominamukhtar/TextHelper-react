import React, { useState } from 'react';

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handlelowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const speak = () => {
    let msg = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(msg);
    setSpeaking(true);
  };

  const stopSpeaking = () => {
    window.speechSynthesis.cancel();
    setSpeaking(false);
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState('');
  const [isSpeaking, setSpeaking] = useState(false);

  const handlecopy = () => {
    let text=document.getElementById('myBox')
     text.select();
     navigator.clipboard.writeText(text.value);
     props.showAlert("Copied to clipboard","success");
  
  };
  const handleclear = () => {
    let newText = '';
    setText(newText);
  };
  const characterCount = text.trim().replace(/\s/g, "").length;
const wordCount = text.trim().split(/\s+/).filter(Boolean).length;

  return (
    <>
      <div className='container' style={{color: props.mode === 'dark' ? 'white' : '#342f2f'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark' ? '#342f2f' : 'white', color: props.mode === 'dark' ? 'white' : '#342f2f'}} id="myBox" rows="11"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Click for Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handlelowClick}>Click for Lowercase</button>
        <button type="button" onClick={isSpeaking ? stopSpeaking : speak} className="btn btn-success mx-2 my-2">
          {isSpeaking ? 'Stop' : 'Speak'}
           </button>
        <button className="btn btn-primary mx-2" onClick={handlecopy}>Click for copy</button>
        <button className="btn btn-primary mx-2" onClick={handleclear}>Clear all</button>
      </div>

      <div className='container my-3' style={{color: props.mode === 'dark' ? 'white' : '#342f2f'}}>
        <h2>Your Text Summary</h2>
        {/* <p>{text.trim().length} characters {text.trim().split(/\s+/).filter(Boolean).length} words</p> */}
        <p>
    {characterCount} characters {wordCount} words
  </p>
        <p>{0.008 * text.trim().length} Minutes Read</p>
        <h2>Preview</h2>
        <p>{text.length>0? text: "Enter something in the textbox to preview here"}</p>
      </div>
    </>
  );
}
