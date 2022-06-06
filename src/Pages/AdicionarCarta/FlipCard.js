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

  function handleClick() { 
    if (card.variant === "button") { 
      setShowBack(!showBack); 
    } 
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
                <label>Question:
                  <input type="text" />
                </label>
              </form>
            <button className="botaoCard" onClick={handleClick}>Flip</button>
            </p>
          </div>
        </div>
        <div className="card back">
          <div className="card-body d-flex justify-content-center align-items-center">
            <p className="card-text">{card.back}
              <label>Answer:
                <input type="text"/>
              </label>
              <button className="" onClick={handleClick}>Flip</button>
              </p>
                <form>
              </form>botaoCard
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlipCard;