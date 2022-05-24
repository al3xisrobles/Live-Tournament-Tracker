import React from 'react'
import './css/InProgress.css'

const InProgress = ({
  children
}) => {

  return (
    <>
      <div className="blink-box">
        <div className="blinking-dot"/>
        <p>IN PROGRESS</p>
      </div>
    </>
  )
};

export default InProgress;
