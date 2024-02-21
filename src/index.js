import React from 'react'
import App from './App'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'

import Tours from './Components/Tours_src/Tours'
import Birthday from './Components/Birthday_src/Birthday'
import ExpandingCards from './Projects/ExpandingCards'
import ProgressSteps from './Projects/ProgressSteps'
import FancyCounter from './Projects/FancyCounter'
import IntrestCalculator from './Projects/IntrestCalculator'
import BMIcalculator from './Projects/BMIcalculator'
import TestProject from './Projects/TestProject'
// import Footer from "./Components/Footer";

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* Everything in the app should be under the Browser Router. hence placed Backbtn under this*/}

      <Routes>
        <Route exact path='/' element={<App />} />
        <Route exact path='/tours' element={<Tours />} />
        <Route exact path='/progress-steps' element={<ProgressSteps />} />

        <Route exact path='/expanding-cards' element={<ExpandingCards />} />
        <Route exact path='/fancy-counter' element={<FancyCounter />} />
        <Route exact path='/bmi-calculator' element={<BMIcalculator />} />
        <Route exact path='/test-project' element={<TestProject />} />
        <Route
          exact
          path='/intrest-calculator'
          element={<IntrestCalculator />}
        />
        <Route exact path='*' element={<App />} />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  </React.StrictMode>
)
