import React from 'react'
import Art from '../images/Art.png'
import { Link } from "react-router-dom";
import './css/Home.css'

function Home() {

  return (
    <>
      <img className="art" src={Art} alt="" width="200px"/>
      <div className="home-body">
        <h1 className="title">Home</h1>
        <div className="options">
          <Link to="/standings">
            <div className="box standings">
              <h1 className="box-title">Standings</h1>
            </div>
          </Link>

          <div>
            <div className="subheader">
              <h3>Be a part of the change</h3>
            </div>
            <a target="_blank" rel="noreferrer" href="https://fundraising.stjude.org/site/TR/Challenge/Events?fr_id=138518&pg=entry">
              <div className="box stJudeLink">
                <h1 className="box-title">Donate</h1>
              </div>
            </a>
          </div>

          <div>
            <div className="subheader">
                <h3>Go for glory</h3>
            </div>
            <Link to="teams">
              <div className="box yourTeam">
                <h1 className="box-title">Your Team</h1>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>

  )
}

export default Home
