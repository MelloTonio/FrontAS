import AdicionarCarta from '../AdicionarCarta/adicionarCarta.js';
import Iniciar from '../Iniciar/Iniciar.js';
import Login from '../Login/Login.js';
import { useNavigate } from 'react-router-dom';
import './home.css'

function Home() {
  
  const navigate = useNavigate();

  const handleClick = () => {
      navigate("/Adicionarcarta");
  }

    return (
      <div className="App">
        <header className="App-header">
          <button className='botao'>INICIAR</button>
          <button className='botao'>LOGIN</button>
          <button className='botao' onClick={handleClick}>ADICIONAR CARTA</button>
        </header>
      </div>
    );
}



export default Home;