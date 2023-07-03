import '../App.css'
// import Container from '../Components/Container'
import BackBtn from '../Components/Container'
import { Link } from 'react-router-dom'

function ExpandingCards() {
  return (
    <>
      <div>
        <Link to='/'>
          <button className='btn btn-dark backBtn'>Go Back</button>
        </Link>
        <div className='project'>
          <h1>Expanding Cards</h1>
        </div>
      </div>
      {console.log('asd')}
    </>
  )
}

export default ExpandingCards
