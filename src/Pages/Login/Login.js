import React, { useState } from "react";
import './login.css';

function Login(){

    const [userName, setUserName] = useState('')
    const [nickname, setNickname] = useState('')

    function handleUserChange(e){
        setUserName(e.target.value)
    }

    async function loginUser(e){
        const URL = `http://localhost:3001/users?`;
        try {
            let response = await fetch(URL + new URLSearchParams({
              nickname: userName
            }), {
              method: 'GET',
            });
  
            const data = await response.json();
            if (data) {
                localStorage.setItem("userID", data.id);
            }
           
          } catch (e) {
            console.log('DEU RUIM BOY', e);
          }



    
    }


    return(
        <div className="form">
          <div className="form-body">
              <div className="username">
                  <label className="form__label" for="username">First Name: </label>
                  <input className="form__input" type="text" id="username" onChange={(e) => handleUserChange(e)}  placeholder="Username"/>
              </div>
              <p></p>
              <div className="password">
                  <label className="form__label" for="password">Senha: </label>
                  <input  type="password" id="password" className="form__input" placeholder="password"/>
              </div>
          </div>
          <div class="footer">
            <p></p>
              <button type="submit" onClick={(e)=> loginUser(e)}  className="registerButton">Login</button>
          </div>
      </div>      
    );
}
export default Login;