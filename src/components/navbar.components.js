import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component{

    render() {
        return(
            <nav className= 'navbar navbar-dark bg-dark navbar-expand-lg'>
                <Link to ="/" className = "navbar-brand">PowerTracker</Link>
                <div class ="collapse navbar-collapse">
                    <ul className = "navbar-nav mr-auto">
                        <li className= 'navbar-item'>
                        <Link to ='/' className = 'nav-link'>Exercises</Link>
                        </li>
                        <li className = 'navbar-item'>
                        <Link to ="/create" className = 'nav-link'>Create log</Link>
                        </li>
                        <li className = 'navbar-item'>
                        <Link to ='/user' className = 'nav-link'>Create User</Link>
                        </li>
                        <li className = 'navbar-item'>
                        <Link to ='/ORM-calculator' className ='nav-link'>One rep Max Calculator</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}