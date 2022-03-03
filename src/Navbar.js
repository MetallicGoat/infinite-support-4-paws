import logo from './logo.png';
import {Link} from "react-router-dom";

function Navbar() {
    return(
        <nav className="navbar">
            <Link to="/"><img src={logo} alt="Logo"/></Link>
            <div className="links">
                <Link to="/">About Us</Link>
                <Link to="/stories">Our Stories</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/apply" style={{
                    color: 'white',
                    backgroundColor: '#B76E79',
                    borderRadius: '8px'
                }}>Apply</Link>
            </div>
        </nav>
    )
}

export default Navbar;