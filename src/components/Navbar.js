import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.png'

const Navbar = () =>{
	return(
			<div className='navbar-container'>
				<ul className="navbar">
					<div className="container">
						<li className="nav-item">
							<Link to="/" className="brand"><img alt="" src={logo} height="100%" width="45"/>erse</Link>
						</li>
						<div className="img">
							<li className="nav-item"><Link to="/top">Top Charts</Link></li>
							<li className="nav-item"><Link to="/about">About Us</Link></li>
						</div>
  				</div>
	  		</ul>
			</div>
		);
}
export default Navbar;
