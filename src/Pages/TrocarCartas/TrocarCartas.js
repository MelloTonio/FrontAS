import React, { useState,useEffect } from "react";
import "./TrocarCartas.css"


function TrocarCartas(){


   async function doTrade(e){
        const URL = `http://localhost:3001/cards/tradeCard?`;

        const urlSearchParams = new URLSearchParams(window.location.search);
        const params = Object.fromEntries(urlSearchParams.entries());
        
        const receiverID = e.target.getAttribute('userid')
        const cardID = params["cardID"]

        console.log(cardID, receiverID)

       try {
          await fetch(URL + new URLSearchParams({
            cardID: cardID,
            ownerID: "567ce3f4-58e2-4bfd-b088-90f4ac2c056e",
            receiverID: receiverID,
          }), {
            method: 'GET',
          });

          console.log("sucesso")
    
         
        } catch (e) {
          console.log('DEU RUIM BOY', e);
        }
        
    }

    const [users, setUsers] = useState('')

    useEffect(() => {
        async function getData() {
          const URL = `http://localhost:3001/users/all?`;
    
          try {
            let response = await fetch(URL, {
              method: 'GET',
            });
            const data = await response.json();
            console.log(users)
            if (data){
              setUsers([...data,])
              console.log(users)
            }
          } catch (e) {
            console.log('DEU RUIM BOY', e);
          }
        }
        getData();
      }, []);


    return(
          <div className="form-body">
               {users.length >= 1 && users.map((user,index) => 
               <div>
               <div className="formR">
              <div className="userID_1">
                  <label className="form__label" for="userID_1">{user.email}</label>
                  <div>{user.nickname}</div>
                  <button userid={user.id} onClick={e => doTrade(e)}>Trocar</button>
              </div>
          </div>
          <div class="footer">
          </div>
          </div>)}
        </div>
    );
}
export default TrocarCartas;