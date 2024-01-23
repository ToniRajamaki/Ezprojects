import React from 'react'
import './Styles/FancyCounter.css'
import { useState } from 'react'
import BackButton from '../BackButton'

function FancyCounter() {
  const [count, setCount] = useState(0)

  return (

    <div>
        <BackButton/>
      <h1 className='counter-title'>FANCY COUNTER!</h1>
      <h4 className='counter'>Count: {count}</h4>
      <button
        className='counterButton'
        onClick={() => {
          setCount(count - 1)
        }}>
        -1
      </button>
      <button
        className='counterButton'
        onClick={() => {
          setCount(count - 5)
        }}>
        -5
      </button>
      <button
        className='counterButton'
        onClick={() => {
          setCount(0)
        }}>
        Reset
      </button>
      <button
        className='counterButton'
        onClick={() => {
          setCount(count + 1)
        }}>
        +1
      </button>
      <button
        className='counterButton'
        onClick={() => {
          setCount(count +5)
        }}>
        +5
      </button>
    </div>
  )
}

export default FancyCounter
