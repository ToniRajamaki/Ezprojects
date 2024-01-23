import React from 'react'
import { Link } from 'react-router-dom'

// Add the loading screen
// Change the IMGUR hosting to some other host.

const data = [
  {
    id: 0,
    image: 'https://i.imgur.com/q8xTORS.png',
    name: 'Expanding Cards',
    info: 'An application that showcases some fancy card animation.',
    bColor: '#fff',
    linkTo: 'expanding-cards',
  },

  {
    id: 1,
    image: 'https://i.imgur.com/yHiOeyg.png',
    name: 'Progress Steps',
    info: 'Visually pleasing animated progress steps',
    bColor: '#fff',
    linkTo: 'progress-steps',
  },

  {
    id: 2,
    image: 'https://i.imgur.com/6XALxvvm.jpg',
    name: 'fancy-counter',
    info: 'A simple application that displays a set of birthdays from an API. ',
    bColor: '#fff',
    linkTo: 'fancy-counter',
  },
  {
    id: 3,
    image:
      'https://i.imgur.com/K934cZu.png',
    name: 'IntrestCalculator',
    info: 'A simple application that displays a set of birthdays from an API. ',
    bColor: '#fff',
    linkTo: 'intrest-calculator',
  },
]
export default function Container() {
  const backgroundSet = (bColor) => {
    document.querySelector('#root').style.backgroundColor = `${bColor}`
    document.querySelector('html').style.backgroundColor = `${bColor}`
  }

  const cardClickHandle = (bColor, id) => {
    const projectLink = `/${data[id].linkTo}`
    //Clicking the Router link.
    document.querySelector(`a[href="${projectLink}"]`).click()

    //Setting the background colors.
    backgroundSet(bColor)
    window.scrollTo(0, 0)
  }
  return (
    <>
      <div className='headingContainer'>
        <h1 className='mainHeading'>
          <strong>React Projects </strong>
        </h1>
        <h4 className='mainHeading '>that are based on react...(obviously) </h4>
      </div>
      <div className='dContainer container2'>
        <div className='row row-cols-3 mt-10 mx-3 '>
          {data.map((cProject) => {
            const { id, image, info, linkTo, bColor, name } = cProject

            return (
              <div
                className='items card'
                key={id}
                onClick={() => {
                  cardClickHandle(bColor, id)
                }}>
                <img
                  src={image}
                  className='card-img-top imgDefault'
                  alt='...'
                />

                <div className='card-body'>
                  <h4 className='card-title'>
                    <Link to={`/${linkTo}`}>{name} </Link>
                  </h4>
                  <div className='hLine' style={{ width: '5vw' }}>
                    <div className='hLineSub hLineSubDefault'></div>
                  </div>
                  <p className='card-text infoDefault'>{info}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}
