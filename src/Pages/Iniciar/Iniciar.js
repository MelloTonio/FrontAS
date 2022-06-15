import React from "react";
import ReactCardFlip from 'react-card-flip';
import { useState, useEffect } from "react"; 
import cn from "classnames";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { useNavigate } from 'react-router-dom';
function Vercartas({ card },button){

    const [showBack, setShowBack] = useState(false); 
    const [text, setText] = useState('');
    const [tempCardId, setCardId] = useState('');
    const [dbCards, setdbCards] = useState([]);
    const [acerto, setAcerto] = useState(0);
    const [erro, setErro] = useState(0);

    useEffect(() => {
      async function getData() {
        const URL = `http://localhost:3001/cards?`;
  
        try {
          let response = await fetch(URL + new URLSearchParams({
            userID:"567ce3f4-58e2-4bfd-b088-90f4ac2c056e"
          }), {
            method: 'GET',
          });
          const data = await response.json();
          console.log(data)
          if (data){
            setdbCards([...data,])
            console.log(dbCards)
          }
        } catch (e) {
          console.log('DEU RUIM BOY', e);
        }
      }
      getData();
    }, []);
    
    function handleClick(e) { 
      console.log(e.target)
      setShowBack(!showBack); 
    } 
  
  
    async function sendDeleteCardRequest(cardID) {
      const URL = `http://localhost:3001/cards?`;
  
      console.log("inside fn", cardID)
  
      try {
        await fetch(URL + new URLSearchParams({
          cardID: cardID
        }), {
          method: 'DELETE',
        });
  
        window.location.reload()
      } catch (e) {
        console.log('DEU RUIM BOY', e);
      }
    }
      
    function deleteCard(e) { 
      sendDeleteCardRequest(e.target.getAttribute('cardid'))
    } 
  
    function handleAcerto(e) {
      setAcerto(acerto+1)
    }
  
    function handleErro(e) {
      setErro(erro+1)
    }

    function handleChange(e) { 
      setText(e.target.value)
    }
  
    const navigate = useNavigate();
    
    const handleClick1 = (e) => {
      navigate("/TrocarCartas/{}");
    }
  
    return(
     <div className="body">
        <div className='titulo'>Cartas para jogar</div>
  
        <Carousel >
        {dbCards.length >= 1 && dbCards.map((dbCard,index) =><div className="flip-card-outer">
        <div
          className={cn("flip-card-inner", {
            showBack, 
            "hover-trigger": card.variant === "hover"
          })}
        >
          <div className="card front">
            <div className="card-body d-flex justify-content-center align-items-center">
              <p className="card-text">
                  <label className="campoDaCartaQueTemUmNgcEscrito"><div className="textQeA">QUESTION</div>
                 <p>{dbCard.question}</p>
                  </label>
              </p>
            </div>
            <button className="botaoCard2" onClick={(e) => handleClick(e)}>Flip</button>
          </div>
          <div className="card back">
            <div className="card-body d-flex justify-content-center align-items-center">
              <p className="card-text">{card.back}
              <form>
                <label className="campoDaCartaQueTemUmNgcEscrito"><div className="textQeA">ANSWER</div>
                <p>{dbCard.answer}</p>
                </label>
                </form>
                </p>
            </div>
            <button className="botaoCard" onClick={e => handleClick(e)}>Flip</button>
            
          </div>
        </div>
      </div> )}
        </Carousel>
        <button className='botaoDosAcertos'>Certo</button>
        <button className='botaoDosAcertos'>Errado</button>
    </div>);
  }
  
  function Iniciar(){
    const cards = [
      {
        id: "1",
        variant: "button",
      },
    ]; 
    return(
      <div className="header">
        <div className="container">
          <div className="row h-100 align-items-center">
            <div className="align-items-center">
                {cards.map((card) => (
                  <Vercartas key={card.id} card={card} />
                ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Iniciar;
