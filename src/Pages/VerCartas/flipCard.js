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
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  async function sendToServer(e) {
    e.preventDefault();
    const URL = `http://localhost:3001/cards/create`;

    try {
      await fetch(URL, {
        method: 'post',
        mode: 'no-cors',

        body: await JSON.stringify({
          deck_holder: "b32201f7-99c3-495f-8c58-95d375075d71",
          owner: "567ce3f4-58e2-4bfd-b088-90f4ac2c056e",
          question: question,
          answer: answer
        }),

      });
    } catch (e) {
      console.log('DEU RUIM BOY', e);
    }
  }

  function handleClick() { 
    if (card.variant === "button") { 
      setShowBack(!showBack); 
    } 
  } 

  function handleChangeQuestion(e) { 
    setQuestion(e.target.value)
  }

  function handleChangeAnswer(e) { 
    setAnswer(e.target.value)
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
                  <input className="caixaDeTexto" type="text" onChange={(e) => handleChangeQuestion(e)}/>
                </label>
              </form>
            </p>
          </div>
          <button className="botaoCard" onClick={handleClick}>Flip</button>
          <button className="botaoCard">Deletar</button>
          <button className="sendButton">Save</button>
        </div>
        <div className="card back">
          <div className="card-body d-flex justify-content-center align-items-center">
            <p className="card-text">{card.back}
            <form>
              <label className="campoDaCartaQueTemUmNgcEscrito"><div className="textQeA">ANSWER</div>
                 <input className="caixaDeTexto" type="text" onChange={(e) => handleChangeAnswer(e)}/>
              </label>
              </form>
              </p>
          </div>
          <button className="botaoCard" onClick={handleClick}>Flip</button>
          <button className="sendButton" onClick={(e) => sendToServer(e)}>Save</button>
        </div>
      </div>
    </div>
  );
}

export default FlipCard;