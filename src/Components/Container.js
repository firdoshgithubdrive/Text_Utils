import { useState } from "react";

export default function Container(props) {
  const [text, setText] = useState("");
  function handleChange(event) {
    setText(event.target.value);
  }

  function handleUCClick() {
    let newText = text.toUpperCase();
    setText(newText);
    // props.showAlert('Text is Converted to UpperCase','Success')
  }
  
  function handleLCClick() {
    let newText = text.toLowerCase();
    setText(newText);
    // props.showAlert('Text is Converted to LowerCase','Success')
  }
  
  function handleRCClick() {
    let newText = text;
    let rev = "";
    for (let i = newText.length - 1; i >= 0; i--) {
      rev += newText[i];
    }
    setText(rev);
    // props.showAlert('Text is reversed','Success')
  }
  
  function handleCCClick() {
    let NewText = text.split(" ");
    for (let i = 0; i < NewText.length; i++) {
      let word = NewText[i];
      NewText[i] = word.charAt(0).toUpperCase() + word.slice(1);
    }
    setText(NewText.join(" "));
    // props.showAlert('Text has been Capitalized','Success')
  }
  
  function handleACClick() {
    let NewText = text.split(" ");
    for (let i = 0; i < NewText.length; i++) {
      let word = NewText[i];
      let newWord = "";
      for (let j = 0; j < word.length; j++) {
        if (j % 2 === 0) {
          newWord += word.charAt(j).toLowerCase();
        } else {
          newWord += word.charAt(j).toUpperCase();
        }
      }
      NewText[i] = newWord;
    }
    // props.showAlert('Text has been Alternated','Success')
    setText(NewText.join(" "));
  }
  
  //speach Synthesizer
  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
    // props.showAlert('Text is being spoken','Success')
  };
  
  //flip text to upside down
  function flip() {
    var result = flipString(text);
    setText(result);
    // props.showAlert('Text has been flipped','Success')
  }


  function flipString(aString) {
    var last = aString.length - 1;
    var result = new Array(aString.length);
    for (var i = 0; i <= last; i++) {
      var c = aString.charAt(i);
      var r = flipTable[c];
      result[i] = r !== undefined ? r : c;
    }
    return result.join("");
  }
  var flipTable = {
    a: "\u0250",
    b: "p",
    c: "\u0254",
    d: "q",
    e: "\u01DD",
    f: "\u025F",
    g: "\u0183",
    h: "\u0265",
    i: "\u0131",
    j: "\u027E",
    k: "\u029E",
    l: "\u0283",
    m: "\u026F",
    n: "u",
    r: "\u0279",
    t: "\u0287",
    v: "\u028C",
    w: "\u028D",
    y: "\u028E",

    A: "∀",
    B: "ᗺ",
    C: "Ↄ",
    D: "ᗡ",
    E: "Ǝ",
    F: "Ⅎ",
    G: "⅁",
    H: "H",
    I: "I",
    J: "ᒋ",
    K: "ꓘ",
    L: "⅂",
    M: "W",
    N: "N",
    P: "Ԁ",
    R: "ꓤ",
    T: "Ʇ",
    U: "Ո",
    V: "Λ",
    W: "Μ",
    Y: "⅄",

    1: "⇂", 	
    2: "ᘔ", 	
    3: "Ɛ",	
    4: "߈", 	
    5: "ϛ",	
    6: "9", 	
    7: "ㄥ", 	
    8: "8", 	
    9: "6", 
    0: "0",

    ".": "\u02D9",
    "[": "]",
    "]": "[",
    "(": ")",
    ")": "(",
    "{": "}",
    "}": "{",
    "?": "\u00BF",
    "!": "\u00A1",
    "'": ",",  
    ",": "ˋ",
    "<": ">",
    ">": "<",
    "&": "⅋",

    _: "\u203E",
    ";": "\u061B",
    "\u203F": "\u2040",
    "\u2045": "\u2046",
    "\u2234": "\u2235",
    "\r": "\n",
  };
  
  //Copy to clipboard
  function handleCopy() {
    navigator.clipboard.writeText(text);
    // props.showAlert('Text Copied','Success')
  }
  
  //Clear
  function clear() {
    setText("");
    // props.showAlert('Text Cleared','Success')
  }
  
  // const removeExtraaSpace = () => {
  //   let newText = text.split(/[ ]+/);
  //   setText(newText.join(" "));
  //   props.showAlert('Extraa Space is Removed','Success')
  // };
  
  // props.showAlert('Extraa Space is Removed','Success')
  
  //total words
  //   let words=[] 
  //   const totalwords=()=>{
    //       removeExtraaSpace()
    //       words=text.split(' ')
    //   }
    
    //style
    let styles={
      backgroundColor : props.theme==="dark" ? "#2c2b2b" :"#eeeeee" ,
      color: props.theme==="dark" ? "white":"black"
    }
    
    return (
      <div className="container p-3 mb-5  rounded mt-5" style={styles}>
      <div className="mb-3" style={styles}  >
        <label
          htmlFor="exampleFormControlTextarea1"
          className="form-label mt-4 d-flex justify-content-center"
        >
          <h1 className="text-center">Try Some Text Here</h1>
        </label>
        <textarea
          className="form-control mt-4 my-4"
          id="exampleFormControlTextarea1"
          rows="3"
          onChange={handleChange}
          // value={text}
          style={{backgroundColor:props.theme==='dark'?'#4c4c4c':'white', 
                  border:props.theme==='dark'?'black':'#f4f4f4',
                  color:props.theme==='dark'?'white':'black'}}
        />

        <div className="container text-center my-2 rounded" style={{backgroundColor:props.theme==='dark'?'#4c4c4c':'white',color:props.theme==='dark'?'white':'black',borderRadius:'15px'}} >
          <div className="row" style={{color:props.theme==='dark'?'white':'black',borderRadius:'15px'}}  >
            <div className="col">Total Words : {text.split(/\s+/).filter(ele=>ele!=="").length}</div>
            <div className="col">Total Characters : {text.length}</div>
            {/* <div className="col">Read Time : {0.008*text.split(/\s+/).filter(ele=>ele!=="").length} Minutes</div> */}
          </div>
        </div>

        <div className="d-flex justify-content-center">
          <button
            type="button"
            onClick={handleUCClick}
            className="btn btn-primary mt-4 mx-1"
          >
            to UpperCase
          </button>
          <button
            type="button"
            onClick={handleLCClick}
            className="btn btn-primary mt-4 mx-1"
          >
            to LowerCase
          </button>
          <button
            type="button"
            onClick={handleCCClick}
            className="btn btn-primary mt-4 mx-1"
          >
            to Capitalized Case
          </button>
          <button
            type="button"
            onClick={handleACClick}
            className="btn btn-primary mt-4 mx-1"
          >
            to Alternate UpperCase
          </button>
          <button
            type="button"
            onClick={handleRCClick}
            className="btn btn-primary mt-4 mx-1"
          >
            Reverse
          </button>
          <button
            type="button"
            onClick={flip}
            className="btn btn-primary mt-4 mx-1"
          >
            Flip text
          </button>

          {/* <button
            type="button"
            onClick={removeExtraaSpace}
            className="btn btn-primary mt-4 mx-1"
          >
            remove Extraa Space
          </button> */}

          <button
            type="button"
            onClick={clear}
            className="btn btn-danger mt-4 mx-1"
          >
            Clear
          </button>
          <button
            type="button"
            onClick={handleCopy}
            className="btn btn-secondary mt-4 mx-1"
          >
            Copy text
          </button>
          <button
            type="button"
            onClick={speak}
            className="btn btn-warning mt-4 mx-1"
          >
            Speak
          </button>
        </div>
      </div>
      <div className="container" style={styles}>
        <label
          htmlFor="exampleFormControlTextarea1"
          className="form-label mt-4 d-flex justify-content-center"
        >
          <h3 className="text-center">Preview</h3>
        </label>
        <div className="container">
          <p className="paragraph" data-testid="text">{text}</p>
        </div>
      </div>
    </div>
  );
}
