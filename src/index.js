import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AdicionarCarta from './Pages/AdicionarCarta/adicionarCarta';
import Iniciar from './Pages/Iniciar/Iniciar';
import Login from './Pages/Login/Login';
import Home from './Pages/Home/Home'; 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
        <BrowserRouter>
          <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/Adicionarcarta" element={<AdicionarCarta/>} />
          <Route path="/Iniciar" element={<Iniciar/>} />
          </Routes>
        </BrowserRouter>
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();



