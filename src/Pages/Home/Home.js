import AdicionarCarta from '../AdicionarCarta/adicionarCarta.js';
import Iniciar from '../Iniciar/Iniciar.js';
import Login from '../Login/Login.js';
import { useNavigate } from 'react-router-dom';
import './home.css'

function Home() {
  
  const navigate = useNavigate();

  const handleClick1 = () => {
      navigate("/Adicionarcarta");
  }

  const handleClick2 = () => {
    navigate("/Login");
}

const handleClick3 = () => {
  navigate("/VerCartas");
}

const handleClick4 = () => {
  navigate("/Iniciar");
}

    return (
      <div className="App">
        <header className="App-header">
          <button className='botao' onClick={handleClick4}>INICIAR</button>
          <button className='botao' onClick={handleClick2}>LOGIN</button>
          <button className='botao' onClick={handleClick1}>ADICIONAR CARTA</button>
          <button className='botao' onClick={handleClick3}>VER TODAS AS CARTAS</button>
        </header>
      </div>
    );
}


export default Home;
