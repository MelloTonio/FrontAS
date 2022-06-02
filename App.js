import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';

function Button() {
  return alert('a');
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={" "}>INICIAR</button>
        <br> </br>
        <button id='botaoMenu'>LOGIN</button>
        <br> </br>        
        <button id='botaoMenu'>ADICIONAR CARTA</button>
      </header>
    </div>
  );
}

ReactDOM.render(
  <Button />, 
  document.getElementById('mountNode'),
);

export default App;


