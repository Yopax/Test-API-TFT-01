"use client";
import React from 'react'
import {useState} from 'react'
import axios from 'axios'



function App() {

    const  [searchText, setSearchText] = useState('');
    const  [playerData, setPlayerData] = useState({});
    const API_KEY = "RGAPI-a57dfa21-47ff-4c70-b62b-697ae1a5fe73";

  function searchForPlayer(event){
    var APICallString = "https://la2.api.riotgames.com/lol/summoner/v4/summoners/by-name/" + searchText + "?api_key=" + API_KEY;

    axios.get(APICallString).then(function(response){

       setPlayerData(response.data);
    }).catch(function(error){
    });
}

  return (
    <div className=''>
        <div>
            <h5>Leagodsakd legen:</h5>
            <input type="text" onChange={e => setSearchText(e.target.value)} />
            <button onClick={e => searchForPlayer(e)}>Buscar jugador</button>
        </div>
        {JSON.stringify(playerData) != '{}' ? 
        <>
        <p>{playerData.name}</p>
        <img src={"https://ddragon.leagueoflegends.com/cdn/14.4.1/img/profileicon/" + playerData.profileIconId + ".png"}/>
        <p>Level {playerData.summonerLevel}</p>
        
        </>

        :
        <><p>No player Data</p></>}
    </div>
  )
}

export default App