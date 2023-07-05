import React, { useEffect, useState } from 'react'
import BackButton from '../BackButton'
import './Styles/ProgressSteps.css'

function ProgressSteps() {
  const progress = document.getElementById('progress')
  const prev = document.getElementById('prev')
  const next = document.getElementById('next')
  const circles = document.querySelectorAll('.circle')

  const handlePanelClick = () => {
    console.log('asd')
  }

  return (
    <>
      <BackButton />
      <br />
      <div className='project2'>
        <h1 className='project-title'>Progress Steps</h1>
        <div className='container3'>
          <div className='progress-container'>
            <div
              className='progress'
              id='progress'
            ></div>
            <div className='circle active'>1</div>
            <div className='circle'>2</div>
            <div className='circle'>3</div>
            <div className='circle'>4</div>
          </div>

          <button
            className='btn2'
            id='prev'
            disabled
          >
            Prev
          </button>
          <button
            className='btn2'
            id='next'
            onClick={handlePanelClick}
          >
            Next
          </button>
        </div>
      </div>
    </>
  )
}

export default ProgressSteps
