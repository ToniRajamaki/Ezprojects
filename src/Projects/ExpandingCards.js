import React, { useEffect } from 'react'
import BackButton from '../BackButton'
import './Styles/ExpandingCards.css'

function ExpandingCards() {
  useEffect(() => {
    //this is what is being called just once
    const handlePanelClick = (event) => {
      const clickedElement = event.target
      removeActiveClasses()
      clickedElement.classList.add('active')
    }
    const removeActiveClasses = () => {
      return panels.forEach((panel) => {
        panel.classList.remove('active')
      })
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
                "url('https://images.unsplash.com/photo-1548625361-2341a17236b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=715&q=80')",
            }}
          >
            <h3>Nightime Galaxy</h3>
          </div>
          <div
            className='panel'
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1498036882173-b41c28a8ba34?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80')",
            }}
          >
            <h3>Illuminated Metropolis</h3>
          </div>
          <div
            className='panel'
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1548625149-720134d51a3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80')",
            }}
          >
            <h3>Green Valley</h3>
          </div>
          <div
            className='panel'
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1549598685-0058b114c9d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=627&q=80')",
            }}
          >
            <h3>Explore The World</h3>
          </div>
          <div
            className='panel'
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1483197452165-7abc4b248905?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=736&q=80')",
            }}
          >
            <h3>Serene Mountains</h3>
          </div>
        </div>
      </div>
    </>
  )
}
export default ExpandingCards
