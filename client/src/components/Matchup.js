import React from 'react'
import './css/Matchup.css'

export const Matchup = ({
  team1,
  color1,
  score1,

  team2,
  color2,
  score2
}) => {

  return (
    <>
      <div className="block">
        <div className="top-half halves">
          <div className="color top-color" style={{backgroundColor: color1}}/>
          <p className="team-text">{team1}</p>
          <p className="score-text">{score1}</p>
        </div>
        <div className="bottom-half halves">
          <div className="color bottom-color" style={{backgroundColor: color2}}/>
          <p className="team-text">{team2}</p>
          <p className="score-text">{score2}</p>
        </div>
      </div>
    </>
  )
};

export default Matchup
