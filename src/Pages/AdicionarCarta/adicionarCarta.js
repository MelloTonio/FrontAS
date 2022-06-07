import React, { useState } from "react";
import ReactCardFlip from 'react-card-flip';
import cn from "classnames";
import FlipCard from "./FlipCard";
import "./adicionarCarta.scss";
import "./bootstrap.min.css";


const cards = [
  {
    id: "1",
    variant: "button",
  },
];

export default function AdicionarCarta() {
  return (
    <div className="header">
      <div className="container">
        <div className="row h-100">
            <div class="col d-flex flex-column flex-md-row justify-content-around align-items-center">
              {cards.map((card) => (
                <FlipCard key={card.id} card={card} />
              ))}
            </div>
        </div>
      </div>
    </div>
  );
}