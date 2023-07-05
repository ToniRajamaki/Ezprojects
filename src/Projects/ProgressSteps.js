import React, { useEffect, useState } from 'react'
import BackButton from '../BackButton'
import './Styles/ProgressSteps.css'

function ProgressSteps() {
  useEffect(() => {
    console.log('asdasdasdasdsadasd')
  }, [])

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
          >
            Next
          </button>
        </div>
      </div>
    </>
  )
}

export default ProgressSteps
