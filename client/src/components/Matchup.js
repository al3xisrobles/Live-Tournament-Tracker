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

  status
}) => {

  console.log(status === "DONE" && parseInt(team1) < parseInt(team2));

  return (
    <>

        <div className="block-and-bar">
          {/* <div className="in-prog"> */}
            {/* If game is still in progress (i.e. done == "false"),
            render an IN PROGRESS bar */}
            {/* {done === "false" &&
            <InProgress/>}
          </div> */}

          {/* if score == '' just dont print anything where the score or the - usually is */}

          <div className="block">
            {status === "INPROG" &&
              <InProgress className="in-prog"/>}
            <div className="both-halves">
              <div className="top-half halves">
                <div className="color top-color" style={{backgroundColor: color1}}/>

                {/* If a team is done, dim the loser's text */}
                {(status === "DONE" && team1 < team2) &&
                  <p className="team-text lost-text">{team1}</p>}
                {(status !== "DONE" || (status === "DONE" && team1 > team2)) &&
                  <p className="team-text">{team1}</p>}

                {/* If game is in progress, display scores as "-" */}
                {status === "INPROG" &&
                  <p className="score-text">-</p>}

                {/* Otherwise, just leave scores empty but dim if team lost */}
                {(status === "DONE" && team1< team2) &&
                  <p className="score-text lost-text">{score1}</p>
                  }
                {(status !== "DONE" || (status ==="DONE" && team1 > team2)) &&
                <p className="score-text">{score1}</p>}
              </div>

              <div className="bottom-half halves">
                <div className="color bottom-color" style={{backgroundColor: color2}}/>

                {/* If a team is done, dim the loser's text */}
                {(status === "DONE" && team1 > team2) &&
                  <p className="team-text lost-text">{team2}</p>}
                {(status !== "DONE" || (status === "DONE" && team1 < team2)) &&
                  <p className="team-text">{team2}</p>}

                {/* If game is in progress, display scores as "-" */}
                {status === "INPROG" &&
                  <p className="score-text">-</p>}

                {/* Otherwise, just leave scores empty but dim if team lost */}
                {(status === "DONE" && team1 > team2) &&
                  <p className="score-text lost-text">{score2}</p>
                  }
                {(status !== "DONE" || (status ==="DONE" && team1 < team2)) &&
                <p className="score-text">{score2}</p>}
              </div>
            </div>
          </div>
        </div>
    </>
  )
};

export default Matchup
