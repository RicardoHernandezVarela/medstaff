import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

/* Import routes */
import * as ROUTES from '../../routes/Routes';

/* Import CSS */
import './Navbar.css'

class Navbar extends Component {
    constructor() {
        super();

        this.state = {

        }
    }

    render() {
        return (
            <div>
                <ul>
                    <li>
                        <NavLink exact to={ROUTES.HOME}>HOME</NavLink>
                    </li>
                    <li>
                        <NavLink to={ROUTES.ADMIN}>ADMIN</NavLink>
                    </li>
                    <li>
                        <NavLink to={ROUTES.SIGN_IN}>SIGN IN</NavLink>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Navbar;
