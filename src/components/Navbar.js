import React from 'react';
import {Link, NavLink, withRouter} from 'react-router-dom';


const Navbar = (props) =>{

    // setTimeout(() =>{
    //              props.history.push('/about')
    //          },2000);
return (
    <nav className="nav-wrapper red darken-3">
        <div className="container">
            <a className="brand-logo" >Plan Your Travel</a>
            <ul className="right">
                <li><NavLink exact to="/"></NavLink></li>
            </ul>
        </div>
    </nav>
)
}

export default withRouter(Navbar);
