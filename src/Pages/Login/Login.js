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
                  <label className="form__label" for="username">First Name</label>
                  <input className="form__input" type="text" id="username" onChange={(e) => handleUserChange(e)}  placeholder="Username"/>
              </div>
              <div className="email">
                  <label className="form__label" for="email">Email</label>
                  <input  type="email" id="email" className="form__input" placeholder="Email"/>
              </div>
          </div>
          <div class="footer">
              <button type="submit" onClick={(e)=> loginUser(e)}  className="registerButton" class="btn">Register</button>
          </div>
      </div>      
    );
}
export default Login;