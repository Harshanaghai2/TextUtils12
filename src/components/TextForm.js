import React,{useState} from 'react'
import './Textform.css';

export default function TextForm(props) {
    const [text,setText] = useState('Enter text here');
    const handleUpClick = ()=>{
        console.log("UpperCase was Clicked"+ text);
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleOnChange = (event)=>{
      console.log("On Change");
      setText(event.target.value);
    }
    const handleDownClick = ()=>{
      console.log("Lowercase was Clicked"+ text);
      let newText1 = text.toLowerCase();
      setText(newText1);
    }
    const handleClearClick = ()=>{
      console.log("ClearText was Clicked"+ text);
      let newText2 = '';
      setText(newText2);
    }
    const handleAltClick = ()=>{
      console.log("Alternate Case was Clicked"+ text);
      let newText3 = text.split('').map((char, index) =>
        index % 2 === 0 ? char.toUpperCase() : char.toLowerCase()
      ).join('');
      setText(newText3);
    }
    const handleCopyClick = ()=>{
      console.log("Copy Text was Clicked"+ text);
        var text1 = document.getElementById("myBox");
        text1.select();
        navigator.clipboard.writeText(text.value);
    }
   const handleRemoveClick = ()=>{
    console.log("Remove Extra Whitespaces was Clicked"+ text);
  
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "))
  
   }
    return (
      <>
    <div className='container' id='container'>
        <h1>{props.heading}</h1>
    <div className="mb-3" >
    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
    </div>
    <button className="btn btn-success mx-2" onClick={handleUpClick}>Convert to uppercase</button>
    <button className="btn btn-success mx-2" onClick={handleDownClick} >Convert to lowercase</button>
    <button className="btn btn-success mx-2" onClick={handleClearClick} >Clear Text</button>
    <button className="btn btn-success mx-2 my-2" onClick={handleAltClick} >AlTeRnAtE CaSe</button>
    <button className="btn btn-success mx-2 my-2" onClick={handleCopyClick} >Copy Text</button>
    <button className="btn btn-success mx-2 my-2" onClick={handleRemoveClick} >Remove Extra Whitespaces</button>
   
    </div>success
    <div className="container my-2">
      <h3>Your text summary:</h3>
      <span>{text.split(" ").length} words and {text.length} characters | </span>
      <span>Sentence Count : {text.split(".").length} | </span>
      <span>Minutes read : {0.008 * text.split(" ").length} | </span>
      <h2>Preview</h2>
    <p>{text}</p>
    </div>
    </>
  )
}
