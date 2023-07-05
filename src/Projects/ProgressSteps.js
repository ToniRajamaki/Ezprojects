import React, { useEffect } from 'react'
import BackButton from '../BackButton'
import './Styles/ProgressSteps.css'

function ProgressSteps() {
 

  
  return (
    <>
      <BackButton />
      <br></br>
      <div className='project2'>
        <h1 className='project-title'>Progress Steps</h1>
        <div class="container3">
      <div class="progress-container">
        <div class="progress" id="progress"></div>
        <div class="circle active">1</div>
        <div class="circle">2</div>
        <div class="circle">3</div>
        <div class="circle">4</div>
      </div>

      <button class="btn" id="prev" disabled>Prev</button>
      <button class="btn" id="next">Next</button>
    </div>
      </div>
    </>
  )
}
export default ProgressSteps
