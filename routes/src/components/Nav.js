import React from 'react';
import { Link } from '@reach/router';

const Nav = () => (
    <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact-us">Contact US</Link>
    </div>
)

export default Nav;