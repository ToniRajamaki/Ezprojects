import React, { useEffect, useState } from 'react'
import BackButton from '../BackButton'
import './Styles/ProgressSteps.css'

function ProgressSteps() {
  const [currentActive, setCurrentActive] = useState(1)

  function updateProgress() {
    const circles = document.querySelectorAll('.circle')
    circles.forEach((circle, idx) => {
      if (idx < currentActive) {
        circle.classList.add('active')
      } else {
        circle.classList.remove('active')
      }
    })

    const actives = document.querySelectorAll('.active')

    const progress = ((actives.length - 1) / (circles.length - 1)) * 100 + '%'
    const progressBar = document.getElementById('progress')
    progressBar.style.width = progress

    const prev = document.getElementById('prev')
    const next = document.getElementById('next')

    if (currentActive === 1) {
      prev.disabled = true
    } else {
      prev.disabled = false
    }

    if (currentActive === circles.length) {
      next.disabled = true
    } else {
      next.disabled = false
    }
  }

  const handlePrev = () => {
    if (currentActive > 1) {
      setCurrentActive((prevActive) => prevActive - 1)
    }
  }

  const handleNext = () => {
    if (currentActive < 4) {
      setCurrentActive((prevActive) => prevActive + 1)
    }
  }

  useEffect(() => {
    updateProgress()
  }, [currentActive])

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
            onClick={handlePrev}
          >
            Prev
          </button>
          <button
            className='btn2'
            id='next'
            onClick={handleNext}
          >
            Next
          </button>
        </div>
      </div>
    </>
  )
}

export default ProgressSteps
