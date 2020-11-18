import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

export default function NavMenu() {

    return (
        <Navbar bg="light" variant="light">
            <Navbar.Brand>
                <NavLink
                    className='mx-3 h3 col-xl-* d-flex align-middle'
                    to='/'
                    activeClassName='activeLink'
                    exact
                >Home</NavLink>
            </Navbar.Brand>

            <Nav className="mr-auto">

                <NavLink
                    className='mx-3 h3 col-xl-* d-flex align-middle'
                    exact
                    activeClassName='activeLink'
                    to='/task'
                >Task</NavLink>

            </Nav>
        </Navbar>
    );
}