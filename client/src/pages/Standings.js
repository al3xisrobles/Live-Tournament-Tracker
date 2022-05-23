import React from 'react'
import './css/Standings.css'
import Matchup from '../components/Matchup'

function Standings() {
  return (
    <>
      <div>
        <div className="header">
          <h1>Standings</h1>
        </div>
        <div className="round-title">
          <h2 className="round-alias">Sweet 16</h2>
          <p>Round 1</p>
        </div>
        <div className="blocks">
          <Matchup team1="Team Synergy"
                     color1="blue"
                     score1="21"
                     team2="Shahab's Hair"
                     color2="purple"
                     score2="18"/>

          <Matchup team1="Suck me off"
                     color1="orange"
                     score1="-"
                     team2="Eli ur a cuck"
                     color2="brown"
                     score2="-"/>

          <Matchup team1="Yk what I like"
                     color1="pink"
                     score1="21"
                     team2="Underdogs"
                     color2="green"
                     score2="18"/>

          <Matchup team1="Cmon man"
                     color1="red"
                     score1="21"
                     team2="Fuck eli"
                     color2="cyan"
                     score2="18"/>
        </div>
      </div>
    </>
  )
}

export default Standings
