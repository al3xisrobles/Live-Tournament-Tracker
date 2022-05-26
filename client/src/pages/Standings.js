import React, { useState, useEffect } from 'react'
import './css/Standings.css'
import Matchup from '../components/Matchup'


function Standings() {
  //data, setData, useState, fetch to get info from backend
  const [data, setData] = useState([{}])

  // // Fetch backend
  useEffect(() => {
    fetch("/standings").then(
      res => res.json()
    ).then(
      data => {
        setData(data)
        console.log(data)
      }
    )
  }, [])

  const realData = [['16', 'Frightful', '', 'The Anti Social Club', '', 'INPROG'],
                 ['16', 'Kiss My Ace', '', 'Sig Phi', '', 'INPROG'],
                 ['16', 'Big Booty Bumpers', '19', 'Sets on the Beach', '21', 'DONE'],
                 ['16', 'Neighbors', '', 'Fire Breathing Dragons', '', 'INPROG'],
                 ['16', 'Grimmjob Volleyball Club', '', 'Jae and MC', '', 'INPROG'],
                 ['16', 'Placeholder', '', 'EAt My Ass', '', 'WAITING'],
                 ['16', 'Snoopy', '8', 'The Big Ball Destroyers', '21', 'DONE'],
                 ['16', 'Bullenem', '', 'Caramelos', '', 'WAITING'],
                 ['8', '', '', 'Kiss My Ace', '', 'WAITING'],
                 ['8', 'Sets on the Beach', '', '', '', 'WAITING'],
                 ['8', '', '', '', '', 'WAITING'],
                 ['8', 'The Big Ball Destroyers', '', '', '', 'WAITING'],
                 ['4', '', '', '', '', 'WAITING'],
                 ['4', '', '', '', '', 'WAITING'],
                 ['2', '', '', '', '', 'WAITING']];

  // const realData = [];
  // for(let i = 0; i<data.length;i++) {
  //   const temp = []
  //   for (let j=0; j<data[i].length;j++) {
  //     temp.push([data[i][j]])
  //   }
  //   realData.push(temp)
  // }

  //color dictionary
  const colors = ["blue", "indigo", "purple", "pink", "red", "green", "teal", "cyan", "#8D8D8D", "#be33c5", "#85b59d", "#afefac", "#3a63dd", "#bacb23", "#061a0a", "#d1a302"];

  const teams = ["Bullenem",
                 "Caramelos",
                 "The Big Ball Destroyers",
                 "Snoopy",
                 "Sets on the Beach",
                 "Jae and MC",
                 "Grimmjob Volleyball Club",
                 "Fire Breathing Dragons",
                 "Placeholder",
                 "Big Booty Bumpers",
                 "Sig Phi",
                 "EAt My Ass",
                 "Kiss My Ace",
                 "The Anti Social Club",
                 "Neighbors",
                 "Frightful"]

  var color_dict = {};

  for(var i = 0; i < teams.length; i++) {
    color_dict[teams[i]] = colors[i];
  }

  console.log(color_dict);

  return (
    <>
      <div className="standings-body">
        <div className="header">
          <h1>Standings</h1>
        </div>

        <div className="round-titles">
          <div className="round-title">
            <h2 className="round-alias">Sweet 16</h2>
            <p>Round 1</p>
          </div>

          <div className="round-title">
            <h2 className="round-alias">Elite 8</h2>
            <p>Round 2</p>
          </div>

          <div className="round-title">
            <h2 className="round-alias">Final 4</h2>
            <p>Round 3</p>
          </div>

          <div className="round-title">
            <h2 className="round-alias">Championship</h2>
            <p>Round 4</p>
          </div>
        </div>

        <div className="blocks">
          <div className="sweet-sixteen spaced-blocks">

           {realData.slice(0, 8).map((matchup, i) =>
            <Matchup key={i}
                      team1={matchup[1]}
                      color1={color_dict[matchup[1]]}
                      score1={matchup[2]}
                      team2={matchup[3]}
                      color2={color_dict[matchup[3]]}
                      score2={matchup[4]}
                      status={matchup[5]}/>)
           }

          </div>

          <div className="elite-eight spaced-blocks">

            {realData.slice(8, 12).map((matchup, i) =>
            <Matchup team1= {matchup[1]}
                      color1={(matchup[1] in color_dict) ? color_dict[matchup[1]] : "grey"}
                      score1={matchup[2]}
                      team2={matchup[3]}
                      color2={(matchup[3] in color_dict) ? color_dict[matchup[3]] : "grey"}
                      score2={matchup[4]}
                      status={matchup[5]}/>)
            }

          </div>

          <div className="final-four spaced-blocks">

          {realData.slice(12, 14).map((matchup, i) =>
            <Matchup team1= {matchup[1]}
                      color1={(matchup[1] in color_dict) ? color_dict[matchup[1]] : "grey"}
                      score1={matchup[2]}
                      team2={matchup[3]}
                      color2={(matchup[3] in color_dict) ? color_dict[matchup[3]] : "grey"}
                      score2={matchup[4]}
                      status={matchup[5]}/>)
            }
          </div>

          <div className="championship spaced-blocks">

          <Matchup team1= {realData[14][1]}
                      color1={(realData[14][1] in color_dict) ? color_dict[realData[14][1]] : "grey"}
                      score1={realData[14][2]}
                      team2={realData[14][3]}
                      color2={(realData[14][3] in color_dict) ? color_dict[realData[14][3]] : "grey"}
                      score2={realData[14][4]}
                      status={realData[14][5]}/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Standings
