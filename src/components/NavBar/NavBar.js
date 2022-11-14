import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import HomeIcon from "../../assets/toppng.com-beer-mug-icon-beer-mug-icon-867x952.png"
import "./NavBar.css"

function NavBar({setShow}){
return(
    <Navbar expand="lg" sticky="top" variant="dark" bg="dark">
   
        <Link to="/"><img className="homePageIcon" onClick={()=>setShow(false)} src={HomeIcon} alt="Home"/></Link> 

    </Navbar>
)
}
export default NavBar
