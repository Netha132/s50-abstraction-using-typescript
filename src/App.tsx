import React from 'react';
import './App.css';
import IPLTeams from './classes/IPLTeams';
import Team from './classes/Team';

function App() {
  // let Teams=new IPLTeams();

  let teams=new Team();

  console.log(`Number of Teams : ${teams.noOfTeams}`) 
  console.log(`number of players: ${teams.noOfPlayers}`)
  teams.teamContains();


  return (
    <div className="App">
      
    </div>
  );
}

export default App;
