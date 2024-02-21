import React from 'react'
import './Styles/TestProject.css';

const IMAGES = ["sandbox/public/TestProjectImages/Section.png",
"sandbox/public/TestProjectImages/Section-2.png",
"sandbox/public/TestProjectImages/Section-3.png",
"sandbox/public/TestProjectImages/Section-4.png"]

function TestProject() {
    return (
        <div>
            {IMAGES.map((image, index) => (
                <img key={index} src={image} alt={`Image ${index}`} />
            ))}
        </div>
    );
}

  

export default TestProject
