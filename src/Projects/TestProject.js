import React from 'react'
import './Styles/TestProject.css'

const IMAGES = [
  'https://github.com/ToniRajamaki/Ezprojects/blob/main/sandbox/public/TestProjectImages/Section-1.png?raw=true',
  'https://github.com/ToniRajamaki/Ezprojects/blob/main/sandbox/public/TestProjectImages/Section-2.png?raw=true',
  'https://github.com/ToniRajamaki/Ezprojects/blob/main/sandbox/public/TestProjectImages/Section-3.png?raw=true',
  'https://github.com/ToniRajamaki/Ezprojects/blob/main/sandbox/public/TestProjectImages/Section.png?raw=true',
]

function TestProject() {
  return (
    <div>
      {IMAGES.map((image, index) => (
        <div className='image-container'>
          <img key={index} src={image} alt={`Image ${index}`} />
        </div>
      ))}
    </div>
  )
}

export default TestProject
