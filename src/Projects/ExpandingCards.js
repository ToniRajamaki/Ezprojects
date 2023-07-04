import React, { useEffect } from 'react'
import BackButton from '../BackButton'
import './Styles/ExpandingCards.css'

function ExpandingCards() {
  useEffect(() => {
    const handlePanelClick = () => {
      console.log('asd')
    }

    const panels = document.querySelectorAll('.panel')
    panels.forEach((panel) => {
      panel.addEventListener('click', handlePanelClick)
    })

    return () => {
      panels.forEach((panel) => {
        panel.removeEventListener('click', handlePanelClick)
      })
    }
  }, [])
  return (
    <>
      <BackButton />
      <div className='project'>
        <h1 className='project-title'>Expanding Cards</h1>
        <div className='container'>
          <div
            className='panel active'
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1688320097436-a20f0b5ba1cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80')",
            }}
          >
            <h3>Explore The World</h3>
          </div>
          <div
            className='panel'
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1688320097436-a20f0b5ba1cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80')",
            }}
          >
            <h3>Explore The World</h3>
          </div>
          <div
            className='panel'
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1688320097436-a20f0b5ba1cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80')",
            }}
          >
            <h3>Explore The World</h3>
          </div>
          <div
            className='panel'
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1688320097436-a20f0b5ba1cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80')",
            }}
          >
            <h3>Explore The World</h3>
          </div>
          <div
            className='panel'
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1688320097436-a20f0b5ba1cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80')",
            }}
          >
            <h3>Explore The World</h3>
          </div>
        </div>
      </div>
    </>
  )
}
export default ExpandingCards
