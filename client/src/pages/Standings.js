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

  //const data = [['16', 'Frightful', '21', 'Robles', '5'], ['16', 'Team In-play', '-', 'Team Currently Playing', '-'], ['16', 'Team AFK', '-', 'Team Not Playing Yet', '-'], ['16', 'Team 7', '-', 'Team 8', '-'], ['16', 'Team 9', '-', 'Team 10', '-'], ['16', 'Team 11', '-', 'Team 12', '-'], ['16', 'Team 13', '-', 'Team 14', '-'], ['16', 'Team 15', '-', 'Team 16', ''], ['8', 'testtesttest', '', 'Team Currently Playing', ''], ['8', 'Team AFK', '', 'Team 7', ''], ['8', 'Team 10', '', 'Team 11', ''], ['8', 'Team 13', '', 'Team 16', ''], ['4', 'Frightful', '', 'Team AFK', ''], ['4', 'Team 11', '', 'Team 16', ''], ['2', 'Team AFK', '', 'Team 16', '']];

  const realData = [];
  for(let i = 0; i<data.length;i++) {
    const temp = []
    for (let j=0; j<data[i].length;j++) {
      temp.push([data[i][j]])
    }
    realData.push(temp)
  }

  //color dictionary

  const colors = ["red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red"];
  var color_dict = {};
 
  //might have to change this depending on if we actually get 16 teams
  for(let i = 0; i<8; i++) {
    color_dict[data[i][1]] = colors[2*i];
    color_dict[data[i][3]] = colors[2*i + 1];
  }


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

            <Matchup team1= {realData[0][1]}
                      color1={color_dict[realData[0][1]]}
                      score1={realData[0][2]}
                      team2={realData[0][3]}
                      color2={color_dict[realData[0][3]]}
                      score2={realData[0][4]}
                      done="false"/>

            <Matchup team1= {realData[1][1]}
                      color1={color_dict[realData[1][1]]}
                      score1={realData[1][2]}
                      team2={realData[1][3]}
                      color2={color_dict[realData[1][3]]}
                      score2={realData[1][4]}
                      done="false"/>

            <Matchup team1="Yk what I like"
                      color1="pink"
                      score1="21"
                      team2="Underdogs"
                      color2="green"
                      score2="18"
                      done="true"/>

            <Matchup team1="Cmon man"
                      color1="red"
                      score1="21"
                      team2="Fuck eli"
                      color2="cyan"
                      score2="18"
                      done="false"/>

            <Matchup team1="Team Synergy"
                      color1="blue"
                      score1="21"
                      team2="Shahab's Hair"
                      color2="purple"
                      score2="18"
                      done="true"/>

            <Matchup team1="Suck me off"
                      color1="orange"
                      score1="-"
                      team2="Eli ur a cuck"
                      color2="brown"
                      score2="-"
                      done="false"/>

            <Matchup team1="Yk what I like"
                      color1="pink"
                      score1="21"
                      team2="Underdogs"
                      color2="green"
                      score2="18"
                      done="true"/>

            <Matchup team1="Cmon man"
                      color1="red"
                      score1="21"
                      team2="Fuck eli"
                      color2="cyan"
                      score2="18"
                      done="false"/>
          </div>

          <div className="elite-eight spaced-blocks">

            <Matchup team1= {realData[8][1]}
                      color1={(realData[8][1] in color_dict) ? color_dict[realData[8][1]] : "grey"}
                      score1={realData[8][2]}
                      team2={realData[8][3]}
                      color2={color_dict[realData[8][3]]}
                      score2={realData[8][4]}
                      done="true"/>

            <Matchup team1="Cmon man"
                      color1="red"
                      score1="21"
                      team2="Fuck eli"
                      color2="cyan"
                      score2="18"
                      done="false"/>

            <Matchup team1="Team Synergy"
                      color1="blue"
                      score1="21"
                      team2="Shahab's Hair"
                      color2="purple"
                      score2="18"
                      done="true"/>

            <Matchup team1="Suck me off"
                      color1="orange"
                      score1="-"
                      team2="Eli ur a cuck"
                      color2="brown"
                      score2="-"
                      done="false"/>
          </div>

          <div className="final-four spaced-blocks">

            <Matchup team1="Yk what I like"
                      color1="pink"
                      score1="21"
                      team2="Underdogs"
                      color2="green"
                      score2="18"
                      done="true"/>

            <Matchup team1="Cmon man"
                      color1="red"
                      score1="21"
                      team2="Fuck eli"
                      color2="cyan"
                      score2="18"
                      done="false"/>
          </div>

          <div className="championship spaced-blocks">


            <Matchup team1="Yk what I like"
                      color1="pink"
                      score1="21"
                      team2="Underdogs"
                      color2="green"
                      score2="18"
                      done="true"/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Standings
