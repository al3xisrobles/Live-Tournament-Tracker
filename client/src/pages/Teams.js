import React, { useState, useEffect } from 'react'
import './css/Standings.css'
import { TeamBox } from '../components/TeamBox'


function Teams() {
  //data, setData, useState, fetch to get info from backend
  const [data, setData] = useState([{}])

  // // Fetch backend
  useEffect(() => {
    fetch("/get-teams").then(
      res => res.json()
    ).then(
      data => {
        setData(data)
      }
    )
  }, [])

  const colors = ["blue", "indigo", "purple", "pink", "red", "green", "teal", "cyan", "blue", "indigo", "purple", "pink", "red", "green", "teal", "cyan"];


  const realData = [];
  for(let i = 0; i<data.length;i++) {
    const temp = []
    for (let j=0; j<data[i].length;j++) {
      temp.push([data[i][j]])
    }
    realData.push(temp)
  }

  return (
    <>
      <div className="team-boxes">
        {realData.map((number, i) => (
          <TeamBox key={i} teamName={number[1]} headColor={colors[i]} members={number.slice(3)}/>))}
      </div>
    </>
  )
}

export default Teams
