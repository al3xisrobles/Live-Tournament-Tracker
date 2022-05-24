import React from 'react'
import './css/Matchup.css'
import InProgress from './InProgress'

export const Matchup = ({
  team1,
  color1,
  score1,

  team2,
  color2,
  score2,

  done
}) => {

  return (
    <>

        <div className="block-and-bar">
          {/* <div className="in-prog"> */}
            {/* If game is still in progress (i.e. done == "false"),
            render an IN PROGRESS bar */}
            {/* {done === "false" &&
            <InProgress/>}
          </div> */}

          <div className="block">
            <InProgress className="in-prog"/>
            <div className="both-halves">
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
          </div>
        </div>
    </>
  )
};

export default Matchup
