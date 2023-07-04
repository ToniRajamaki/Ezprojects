import { Link } from "react-router-dom";


const BackButton = () => {
    return ( 
        <Link to='/'>
        <button className='btn btn-dark backBtn backbutton'>Go Back</button>
      </Link>
     );
}
 
export default BackButton;