import { useState, View, TextInput } from "react"; 
import React from "react";
import cn from "classnames";

const UselessTextInput = (props) => {
  const [text, setText] = useState('');
  return (
    <TextInput
      {...props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
      editable
      maxLength={40}
      onChangeText={newText => setText(newText)}
      defaultValue={text}
    />
  );
}

function FlipCard({ card },button) {
  const [showBack, setShowBack] = useState(false); 
  const [text, setText] = useState('');

  function handleClick() { 
    if (card.variant === "button") { 
      setShowBack(!showBack); 
    } 
  } 

  function handleChange(e) { 
    setText(e.target.value)
  }

  return (
    <div
      className="flip-card-outer"
    >
      <div
        className={cn("flip-card-inner", {
          showBack, 
          "hover-trigger": card.variant === "hover"
        })}
      >
        <div className="card front">
          <div className="card-body d-flex justify-content-center align-items-center">
            <p className="card-text">
              <form>
                <label className="campoDaCartaQueTemUmNgcEscrito"><div className="textQeA">QUESTION</div>
                  <input className="caixaDeTexto" type="text" onChange={(e) => handleChange(e)}/>
                </label>
              </form>
            </p>
          </div>
          <button className="botaoCard" onClick={handleClick}>Flip</button>
          <button className="sendButton">Save</button>
        </div>
        <div className="card back">
          <div className="card-body d-flex justify-content-center align-items-center">
            <p className="card-text">{card.back}
            <form>
              <label className="campoDaCartaQueTemUmNgcEscrito"><div className="textQeA">ANSWER</div>
                 <input className="caixaDeTexto" type="text" onChange={(e) => handleChange(e)}/>
              </label>
              </form>
              </p>
          </div>
          <button className="botaoCard" onClick={handleClick}>Flip</button>
          <button className="sendButton">Save</button>
        </div>
      </div>
    </div>

    /*
    < todas as cartas que o usuario já tem >
    */  
  );
}

export default FlipCard;