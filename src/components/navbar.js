import React from 'react';
// import {Link, NavLink} from 'react-router-dom';
import {NavLink, withRouter} from 'react-router-dom'; // add active class to anchor tag
const Navbar = (props) => {
    console.log(props, "these are navbar props");
    return (
       <nav className="nav-wrapper bck-grad">
           <div className="container">
               <a href="/" className="brand-logo">Pasta Time</a>
               <ul className="right">
                   <li><NavLink to="/" >Home</NavLink></li>
                    <li><NavLink to="/About">About</NavLink></li>
                    <li><NavLink to="/Contact" >Contact</NavLink></li>
               </ul>
           </div>
       </nav>
    )
}
export default withRouter(Navbar);