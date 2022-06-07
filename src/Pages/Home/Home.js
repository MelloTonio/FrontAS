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

    return (
      <div className="App">
        <header className="App-header">
          <button className='botao'>INICIAR</button>
          <button className='botao' onClick={handleClick2}>LOGIN</button>
          <button className='botao' onClick={handleClick1}>ADICIONAR CARTA</button>
        </header>
      </div>
    );
}


export default Home;
